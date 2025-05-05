# P2U Web Automation Test

## Overview

`p2u-Web-Automation-Test` is a Cypress-based automation framework designed to perform end-to-end testing for the **P2U Wallet** web application. The framework automates common user flows such as login, registration, and product purchase. Built using **Cypress.io**, it enables fast, reliable browser testing with a clean developer experience.

## Tech Stack

- **Test Framework**: Cypress
- **Language**: JavaScript
- **Package Manager**: npm
- **Version Control**: Git

## Project Structure
```plaintext
cypress/
│
├── e2e/ # Cypress spec files (test cases)
│ ├── login.spec.cy.js
│ ├── purchase.spec.cy.js
│ └── registration.spec.cy.js
│
├── fixtures/ # Test data in JSON format
│ ├── homePage.json
│ ├── loginData.json
│ ├── orderFormPage.json
│ ├── registrationData.json
│ └── urlData.json
│
├── pageObjects/ # Page Object Model for UI components
│ ├── basePage.js
│ ├── homePage.js
│ ├── loginPage.js
│ ├── orderNowPage.js
│ ├── productDetailPage.js
│ ├── productListPage.js
│ └── registrationPage.js
│
├── reports/ # Folder for storing test reports
│
├── screenshots/ # Automatically captured screenshots on failure
│
├── support/ # Custom commands and Cypress setup
│ ├── commands.js
│ └── e2e.js
```

## Installation

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Setup

Clone the repository:

```bash
git clone https://github.com/MuhammadHammadHami/p2u_Web_Automation_Test.git
cd p2u_Web_Automation_Test
```

Install Dependencies 

```bash
npm install
```

### Running Tests

Open Cypress Test Runner

```bash
npx cypress open
```

Run Tests in Headless Mode

```bash
npx cypress run
```

Run a specific test in Headless Mode

```bash
npx cypress run --spec "cypress/e2e/<file-name>.spec.cy.js"
```


