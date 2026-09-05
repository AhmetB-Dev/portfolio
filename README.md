# JOIN

JOIN is a responsive Kanban-based task management application for organizing tasks, contacts and workflows.

The frontend communicates with a custom Django REST Framework backend through a REST API.

## Project Background

JOIN was originally developed as a collaborative frontend project during my web development training.

I later continued the project independently by integrating it with a custom backend that I designed and developed from scratch using Python, Django and Django REST Framework.

I also made additional technical and responsive improvements to the existing frontend.

## Features

- User registration and login
- Guest login
- Kanban task board
- Create, edit and delete tasks
- Drag and drop tasks between board columns
- Assign contacts to tasks
- Create and manage contacts
- Task priorities and due dates
- Subtasks and progress tracking
- Summary dashboard with task statistics
- Responsive layout for desktop, tablet and mobile
- Integration with a Django REST API

## Technologies

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API
- LocalStorage
- SessionStorage
- Flatpickr

### Backend

The backend was independently designed and developed from scratch using:

- Python
- Django
- Django REST Framework
- REST API
- Authentication
- Database persistence

## Backend

The independently developed Django REST Framework backend is maintained in a separate repository:

[JOIN Backend](https://github.com/AhmetB-Dev/join-backend)

## Backend Integration

The frontend communicates with the JOIN backend through the REST API.

The API base URL can be configured before the API script is loaded.

Example:

```html
<script>
  window.JOIN_API_BASE_URL = "http://127.0.0.1:8000/api";
</script>
```

For a deployed environment, the URL can be replaced with the corresponding production API address.

## Run Locally

The frontend can be served with VS Code Live Server or another local web server.

Example:

```text
http://127.0.0.1:5500
```

To use registration, login, contacts and task management, the JOIN backend must also be running.

For backend installation and configuration, see the separate backend repository:

[JOIN Backend](https://github.com/AhmetB-Dev/join-backend)

## Purpose

JOIN is part of my developer portfolio and demonstrates practical experience with:

- Working with an existing frontend codebase
- Frontend and backend integration
- REST API communication
- Authentication
- Task and contact management
- Responsive frontend development
- Django REST Framework backend development