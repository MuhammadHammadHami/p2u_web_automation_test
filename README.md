# P2U Web Automation Test

## Overview

`p2u-Web-Automation-Test` is a Cypress-based automation framework designed to perform end-to-end testing for the **P2U Wallet** web application. The framework automates common user flows such as login, registration, and product purchase. Built using **Cypress.io**, it enables fast, reliable browser testing with a clean developer experience.

## Tech Stack

- **Test Framework**: Cypress
- **Language**: JavaScript
- **Package Manager**: npm
- **Version Control**: Git

## Project Structure

p2u_Web_Automation_Test/
├── cypress/
│ ├── e2e/(login, register, purchase)
│ ├── fixtures/ test data files
│ └── support/  Custom commands
├── cypress.config.js
├── package.json 
├── package-lock.json
└── .gitignore 


## Installation

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Setup

Clone the repository:

```bash
git clone https://github.com/MuhammadHammadHami/p2u_Web_Automation_Test.git
cd p2u_Web_Automation_Test

Install Dependencies 

```bash
npm install

### Running Tests

Open Cypress Test Runner

```bash
npx cypress open

Run Tests in Headless Mode

```bash
npx cypress run

Run a specific test in Headless Mode

```bash
npx cypress run --spec "cypress/e2e/<file-name>.spec.cy.js"



