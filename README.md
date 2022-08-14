This project is used for **UI testing**.

Project has negative and positive tests for testing website **https://sushihouse.by/**

**Project** based on **Typescript** and uses **Cypress** framework. Allure is used as a reporter.

Commands to run test:
- `npx cypress run --env allure=true --headed` - to run all tests with allure without hidden mode
- `npx cypress run --env allure=true'` - to run all tests with allure in hidden mode
- `allure generate allure-results --clean -o allure-report` - to generate allure results
- `allure open` - to open allure results
