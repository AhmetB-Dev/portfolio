<?php

declare(strict_types=1);

function sendJsonResponse(int $statusCode, array $data): void
{
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function sendError(int $statusCode, string $message): void
{
    sendJsonResponse($statusCode, [
        'success' => false,
        'error' => $message,
    ]);
}

function getStringProperty(object $params, string $key): string
{
    $value = $params->{$key} ?? '';

    if (!is_string($value)) {
        return '';
    }

    return trim($value);
}

$allowedOrigins = [
    'http://localhost:4200',
    'https://ahmet-balci.de',
    ];

$siteEmail = 'ahmet_ba@web.de';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin !== '') {
    if (!in_array($origin, $allowedOrigins, true)) {
        sendError(403, 'Origin not allowed');
    }

    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        sendJsonResponse(200, ['success' => true]);
        break;

    case 'POST':
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (json_last_error() !== JSON_ERROR_NONE || !is_object($params)) {
            sendError(400, 'Invalid JSON');
        }

        $email = getStringProperty($params, 'email');
        $name = getStringProperty($params, 'name');
        $userMessage = getStringProperty($params, 'message');
        $honeypot = getStringProperty($params, 'honeypot');

        if ($honeypot !== '') {
            sendError(400, 'Spam detected');
        }

        if ($name === '' || mb_strlen($name) > 100) {
            sendError(400, 'Invalid name');
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 255) {
            sendError(400, 'Invalid email');
        }

        if ($userMessage === '' || mb_strlen($userMessage) > 5000) {
            sendError(400, 'Invalid message');
        }

        if (!filter_var($siteEmail, FILTER_VALIDATE_EMAIL)) {
            sendError(500, 'Server email is invalid');
        }

        $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $safeMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8'));

        $safeReplyTo = str_replace(["\r", "\n"], '', $email);
        $safeSiteEmail = str_replace(["\r", "\n"], '', $siteEmail);

        $recipient = $safeSiteEmail;
        $subject = 'Website Contact Form';

        $mailBody = "
            <strong>Name:</strong> {$safeName}<br>
            <strong>Email:</strong> {$safeEmail}<br><br>
            <strong>Message:</strong><br>
            {$safeMessage}
        ";

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = 'From: Website Kontakt <' . $safeSiteEmail . '>';
        $headers[] = 'Reply-To: ' . $safeReplyTo;
        $headers[] = 'Return-Path: ' . $safeSiteEmail;

        $success = mail(
            $recipient,
            $subject,
            $mailBody,
            implode("\r\n", $headers),
            '-f ' . escapeshellarg($safeSiteEmail)
        );

        if ($success) {
            sendJsonResponse(200, ['success' => true]);
        }

        sendError(500, 'Mail delivery failed');
        break;

    default:
        sendError(405, 'Method not allowed');
}
