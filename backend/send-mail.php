<?php

declare(strict_types=1);

/*
 * Portfolio contact endpoint.
 *
 * The technical sender uses the website domain. The actual destination is
 * the private WEB.DE inbox. The visitor's address is used only as Reply-To,
 * which avoids sending in the name of the visitor's mail provider.
 */

const RECIPIENT_EMAIL = 'ahmet_ba@web.de';
const SENDER_EMAIL = 'contact@ahmet-balci.de';

const ALLOWED_ORIGINS = [
    'http://localhost:4200',
    'https://ahmet-balci.de',
    'https://www.ahmet-balci.de',
];

ini_set('display_errors', '0');
error_reporting(E_ALL);

/**
 * Sends a JSON response and stops script execution.
 */
function sendJsonResponse(int $statusCode, array $data): void
{
    http_response_code($statusCode);
    echo json_encode(
        $data,
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

/**
 * Sends a standardized JSON error response.
 */
function sendError(int $statusCode, string $message): void
{
    sendJsonResponse($statusCode, [
        'success' => false,
        'error' => $message,
    ]);
}

/**
 * Returns a UTF-8 string length without requiring the mbstring extension.
 */
function textLength(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}

/**
 * Reads and decodes the JSON request body.
 */
function readJsonBody(): array
{
    $contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);

    if ($contentLength > 12000) {
        sendError(413, 'Request body is too large');
    }

    $rawBody = file_get_contents('php://input');

    if ($rawBody === false || trim($rawBody) === '') {
        sendError(400, 'Request body is empty');
    }

    try {
        $data = json_decode($rawBody, true, 512, JSON_THROW_ON_ERROR);
    } catch (Throwable $exception) {
        sendError(400, 'Invalid JSON');
    }

    if (!is_array($data)) {
        sendError(400, 'Invalid request data');
    }

    return $data;
}

/**
 * Returns a trimmed string field from the request data.
 */
function getStringField(array $data, string $key): string
{
    $value = $data[$key] ?? '';

    return is_string($value) ? trim($value) : '';
}

/**
 * Removes line breaks from values used in mail headers.
 */
function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

/**
 * Validates the submitted contact data.
 */
function validateContactData(
    string $name,
    string $email,
    string $message,
    string $honeypot
): void {
    if ($honeypot !== '') {
        sendError(400, 'Spam detected');
    }

    if ($name === '' || textLength($name) < 2 || textLength($name) > 100) {
        sendError(400, 'Invalid name');
    }

    if (
        textLength($email) > 255
        || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    ) {
        sendError(400, 'Invalid email');
    }

    if ($message === '' || textLength($message) < 10 || textLength($message) > 5000) {
        sendError(400, 'Invalid message');
    }
}

/**
 * Creates the plain-text email body.
 */
function createMailBody(string $name, string $email, string $message): string
{
    return implode("\r\n", [
        'Neue Kontaktanfrage über das Portfolio',
        '',
        'Name: ' . $name,
        'E-Mail: ' . $email,
        '',
        'Nachricht:',
        $message,
        '',
        'Gesendet am: ' . date('d.m.Y H:i:s'),
    ]);
}

/**
 * Hands the email to the hosting mail service.
 */
function sendContactMail(string $name, string $email, string $message): bool
{
    $sender = sanitizeHeaderValue(SENDER_EMAIL);
    $replyTo = sanitizeHeaderValue($email);

    $headers = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'From: Ahmet B. | Portfolio <' . $sender . '>',
        'Reply-To: ' . $replyTo,
        'X-Mailer: PHP/' . PHP_VERSION,
    ]);

    $arguments = '-f' . $sender;
    $sent = @mail(
        RECIPIENT_EMAIL,
        'Neue Kontaktanfrage über das Portfolio',
        createMailBody($name, $email, $message),
        $headers,
        $arguments
    );

    if ($sent) {
        return true;
    }

    // Some shared-hosting configurations reject the fifth mail() argument.
    return @mail(
        RECIPIENT_EMAIL,
        'Neue Kontaktanfrage über das Portfolio',
        createMailBody($name, $email, $message),
        $headers
    );
}

/**
 * Configures CORS for the Angular application.
 */
function configureCors(): void
{
    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin === '') {
        return;
    }

    if (!in_array($origin, ALLOWED_ORIGINS, true)) {
        sendError(403, 'Origin not allowed');
    }

    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

/**
 * Runs the contact endpoint.
 */
function runContactEndpoint(): void
{
    configureCors();

    $requestMethod = $_SERVER['REQUEST_METHOD'] ?? '';

    if ($requestMethod === 'OPTIONS') {
        sendJsonResponse(200, ['success' => true]);
    }

    if ($requestMethod !== 'POST') {
        sendError(405, 'Method not allowed');
    }

    if (filter_var(RECIPIENT_EMAIL, FILTER_VALIDATE_EMAIL) === false) {
        sendError(500, 'Recipient email is invalid');
    }

    if (filter_var(SENDER_EMAIL, FILTER_VALIDATE_EMAIL) === false) {
        sendError(500, 'Sender email is invalid');
    }

    $data = readJsonBody();
    $name = getStringField($data, 'name');
    $email = getStringField($data, 'email');
    $message = getStringField($data, 'message');
    $honeypot = getStringField($data, 'honeypot');

    validateContactData($name, $email, $message, $honeypot);

    if (!sendContactMail($name, $email, $message)) {
        $lastError = error_get_last();
        $errorDetail = $lastError['message'] ?? 'mail() returned false';
        error_log('Portfolio contact form mail error: ' . $errorDetail);
        sendError(500, 'Mail delivery failed');
    }

    sendJsonResponse(200, ['success' => true]);
}

try {
    runContactEndpoint();
} catch (Throwable $exception) {
    error_log('Portfolio contact endpoint error: ' . $exception->getMessage());

    if (!headers_sent()) {
        header('Content-Type: application/json; charset=UTF-8');
    }

    sendError(500, 'Internal server error');
}
