# Tenant Evaluation

## Project Setup:

1. After cloning the repository, in the root directory run npm `npm install`

If you use **Vs Code** as your editor, please follow this steps to setup Eslint:

1. Install [Eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Open Vs Code settings **Code > Preferences > Settings**
4. Update with the following information:
   ```
   {
   	"editor.codeActionsOnSave": {
   		"source.fixAll.eslint": "always"
   	},
   	"eslint.validate": [
   		"javascript",
   		"typescript"
   	],
   	"editor.formatOnSave": true,
   	"editor.formatOnPaste": false,
   	"editor.indentSize": "tabSize",
   	"editor.fontLigatures": false,
   	"prettier.tabWidth": 2,
   	"typescript.format.enable": true,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "typescript.format.enable": true,
   }
   ```

## Run the tests:

1. On the root directory run `test:local:open`
2. A Cypress window will open with two options, select **end to end**
3. A new window will open with the feature files listed, click on the file you want to run
4. A new window will show running the tests

## Folder structure

```
.
├── LICENSE
├── README.md
├── cypress
│   ├── e2e
│   │   └── auth
│   │       └── login.cy.ts
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.ts
│       ├── e2e.ts
│       ├── pages
│       │   ├── common.page.ts
│       │   └── index.ts
│       └── utils
│           ├── generators.ts
│           └── index.ts
├── cypress.config.ts
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

### Folder description

In this structure, your feature files are stored in the cypress/e2e directory, organized into subdirectories as needed.
Test scenarios are written using Cypress structure; Files should be names \*.cy.ts.

The support directory contains files that are shared across your tests, such as custom commands, selectors, and other
functions. The fixtures directory contains JSON files that are used to provide data for your tests, and the screenshots
and videos directories are used to store screenshots and videos of test runs, respectively.

Your cypress.config.ts configuration file written in Typescript is needed to configure Cypress to use the plugins.

## Short Questions

Answer these in a separate file or within code comments:

1. How would you integrate this test suite into a CI/CD pipeline (e.g., GitHub Actions, Jenkins)? -> The CI/CD file for
   GitHub Actions is already implemented, we just need to enable it into the repo and change some scripts as needed.
2. What would be your approach to scaling this framework for a large application? -> Keep the POM or COM (Recommended by
   Cypress); Also, implement more robust scenarios for different users using fixtures if needed; Implementation for ETL,
   API and Performance.
3. What quality metrics would you track and report on as a QA Leader? ->

```
1. Test Execution Metrics
These metrics help measure test coverage, efficiency, and execution progress.

Test Case Execution Rate – Percentage of planned test cases executed.
Test Case Pass/Fail Rate – Number of passed vs. failed test cases.
Test Automation Coverage – Percentage of test cases automated vs. manual.
Defect Leakage – Number of defects found in production vs. testing.

2. Defect Metrics
These metrics help understand the quality of the software based on defect trends.

Defect Density – Number of defects per module or feature.
Defect Severity and Priority Distribution – Breakdown of defects based on severity (Critical, High, Medium, Low).
Defect Reopen Rate – Percentage of defects reopened after being marked as fixed.

3. Test Coverage Metrics
These metrics indicate how well the testing process covers the application.

Requirement Coverage – Percentage of requirements covered by test cases.
Code Coverage – Percentage of code covered by unit and integration tests.

4. Performance & Reliability Metrics
If performance testing is involved, these metrics help assess system stability.

Response Time – Time taken to process user requests.
Error Rate – Percentage of failed transactions in performance tests.
System Uptime – Availability and reliability of the application.

5. Efficiency & Productivity Metrics
These metrics help measure the efficiency of the QA team and processes.

Test Execution Time – Time taken to execute tests (manual & automated).
Test Automation Stability – Number of flaky or unstable automated tests.
Sprint Test Completion Rate – Percentage of test cases completed within a sprint.

Reporting & Dashboards
To present these metrics effectively, I would use:

Dashboards in tools like Jira, TestRail, or Power BI.
Trend Analysis to track improvements or regressions over time.
Heatmaps for risk-based testing coverage.
Weekly/Monthly QA Reports with actionable insights.
```
