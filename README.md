# Book Reservation Backend Training

This project is a backend system for managing book reservations built with Node.js, Express, and MongoDB. It demonstrates robust application development—complete with authentication, API endpoints, and automated testing using Jest and GitHub Actions.

## Key Features

- **Automated CI/CD:** All tests run automatically on every push and pull request to the `main` branch via GitHub Actions.
- **Multi-Platform Testing:** The test suite executes on Ubuntu, Windows, and macOS using Node.js versions 20, 18, and 16.
- **Code Quality:** ESLint is integrated to enforce consistent coding standards.
- **Basic Tests:** The project includes simple tests (e.g., checking that unknown routes return 404 status) to validate backend functionality.
- **Efficient Dependency Caching:** Uses caching to speed up dependency installation during CI runs.

## Project Structure
---

## Workflow Breakdown

### Trigger Conditions
```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]


book-reservation-backend-training/ ├── .github/ │ └── workflows/ │ └── backend-tests.yml 
# GitHub Actions workflow for testing and 
linting ├── config/ │ └── database.js # Database connection configuration 
├── controllers/ # Route controllers (e.g., books, auth) 
├── middleware/ # Express middleware (e.g., auth, error handling) 
├── models/ # Mongoose models (e.g., Book, User, Reservation) 
├── routes/ # API route definitions 
├── tests/ or tests/ # Test files using Jest & Supertest 
├── app.js # Main application file (with conditional server start) 
├── package.json # Project settings and scripts 
└── README.md # This file