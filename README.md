# book-reservation-backend-training# CI/CD Pipeline Documentation

This document describes the GitHub Actions workflow used to automate backend tests using Jest for the book reservation backend project. The pipeline is triggered on every push and pull request to the `main` branch and executes tests on multiple platforms and Node.js versions. It also enforces code quality through ESLint, caches dependencies to optimize performance, and runs automated tests.

---

## Overview

The CI/CD pipeline is defined in the `.github/workflows/backend-tests.yml` file. Its main objectives are:

- **Automated Testing**: Ensure backend functionality by running Jest tests on every commit.
- **Multi-Platform Support**: Test the project on Ubuntu, Windows, and macOS runners.
- **Multiple Node.js Versions**: Validate compatibility by testing using Node.js versions 20, 18, and 16.
- **Code Quality Checks**: Run ESLint to maintain consistent code style and catch common errors.
- **Caching**: Cache `node_modules` based on `package-lock.json` to speed up dependency installation.
- **Automation Triggers**: The workflow is automatically triggered on push and pull requests targeting the `main` branch.

---

## Workflow Breakdown

### Trigger Conditions
```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
