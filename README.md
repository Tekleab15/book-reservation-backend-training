# Book Reservation Backend Training

This project is a backend system for managing book reservations built with Node.js, Express, and MongoDB. It demonstrates robust application development complete with authentication, API endpoints, and automated testing using Jest and GitHub Actions.

## Key Features

- **Automated CI/CD:** All tests run automatically on every push and pull request to the `main` branch via GitHub Actions.
- **Multi-Platform Testing:** The test suite executes on Ubuntu, Windows, and macOS using Node.js versions 20, 18, and 16.
- **Code Quality:** ESLint is integrated to enforce consistent coding standards.
- **Basic Tests:** The project includes simple tests (e.g., checking that unknown routes return 404 status) to validate backend functionality.
- **Efficient Dependency Caching:** Uses caching to speed up dependency installation during CI runs.

## Testing section
---

## Automated Testing

This project includes automated tests to ensure that the backend functions as expected. The tests are written using [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest), and they run automatically as part of our continuous integration workflow.

### Test Files

- **`__tests__/example.test.js`**  
  *Purpose:*  
  This is a basic sanity test that confirms the testing framework is set up correctly and that the backend is "running" in a very minimal sense.  
  *What It Does:*  
  It simply asserts that a known truth (i.e., `true`) evaluates as truthy, acting as a placeholder to verify that tests can be executed.


- **`__tests__/notfound.test.js`**  
*Purpose:*  
This test verifies that undefined routes return a 404 error, ensuring proper error handling on non-existent endpoints.  
*What It Does:*  
It uses Supertest to simulate an HTTP GET request to an endpoint (`/nonexistent-url`) that does not exist in the application. The test asserts that the server responds with a 404 status code.

## Workflow Breakdown

### Trigger Conditions
```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]


## How to Run the Tests

To run the tests locally, execute the following command:

```bash
npm test



---
This README section provides evaluators and team members with a clear, concise explanation of what each test file does, how to run them, and the overall goal of your testing strategy. Feel free to adjust any details to better match your project's specifics.
