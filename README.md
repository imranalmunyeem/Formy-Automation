# Project Name: Formy

# Project Description
This website contains different functionalities like Autocomplete, button, date, checkbox, drag and drop, dropdown, file upload, enable disable, key-mousehandle, modal, page scroll, radio button, switch window, and webform.

# Help + Testing
The steps below will show how you can run and test this project.

> Step 1 ---
Install nodejs: (https://nodejs.org/en/download/)

> Step 2 ---
Install git: (https://github.com/git-guides/install-git#:~:text=To%20install%20Git%2C%20run%20the,installation%20by%20typing%3A%20git%20version%20.)

> Step 3 ---
Install VsCode: (https://code.visualstudio.com/docs/setup/windows)

> Step 4 ---
Install Cypress: (https://on.cypress.io/installing-cypress)

> Step 5 --- Fork this repository (https://docs.github.com/en/get-started/quickstart/fork-a-repo) it first.

> Step 6 --- Clone (https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

> Step 7 ---
You can unzip the project and open the project folder in VsCode

> Step 8 ---
Add the project to Cypress (https://on.cypress.io/writing-your-first-test)

> Step 9 ---
Run in Continuous Integration (https://on.cypress.io/continuous-integration)


# Mochawesome Report Generator: 
Step 1: npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

step 2: Paste the following code in "reporter-config.json" file 
    "reporter-options":{
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/results/mochawesome",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
      }
    }

Step 3: To merge run the follwing in CL or make script:
   "mochawesome-merge": "npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json"

Step 4: To Delete all run the follwing in CL or make script:
    "delete-mochawesome-report": "rm -rf mochawesome-report/* || true",

Step 5: Delete all and run again 
    "cypress-regression-pack": "npm run delete-results && npm run delete-mochawesome-report && npm run triggerAllTests-headless && npm run mochawesome-merge"
    

# JUnit Report Generator:
npm install --save-dev cypress-multi-reporters mocha-junit-reporter mocha


Step 2: create a file named "reporter-config.json" and paste the code in the file given below:
{
    "reporterEnabled": "spec, mocha-junit-reporter",
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/reports/junit/results-[hash].xml"
    }
  }

Step 3: Paste below code in "cypress.json" file 
{
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "configFile": "reporter-config.json"
  }
}

Step 4: To merge the result run the following command:
npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml

step 5: Custom scripts (Not Mandatory): Paste them on "package.json" file
    "junit-merge": "npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml",
    "delete-merged-junit-report": "rm -rf cypress/results/junit/results.xml",
    "delete-all-results-files": "rm -rf cypress/results/* || true"


# Cypress Retry Installation
>Step 1: Run this on terminal: npm install -D cypress-plugin-retries

>Step 2 : At the top of cypress/support/index.js: require('cypress-plugin-retries')


# All Custom Scripts
To run custom scripts, open terminal and write "npm run script name"

    "triggerAllTests-headless": "npx cypress run",
    
    "triggerAllTests-headed": "npx cypress run --headed",
    
    "triggerAllTests-chrome": "npx cypress run --browser chrome",
    
    "triggerAllTests-edge": "npx cypress run --browser edge",
    
    "triggerAllTests-firefox": "npx cypress run --browser firefox",
    
    "cypress-multi-browser": "npx cypress run --browser chrome --headed & npx cypress run --browser firefox --headed & npx cypress run --browser edge --headed",
    
    "triggerAllTests-dashboard": "npx cypress run --record --key 2d259669-8049-46e2-bbb0-746d8ea0124e",
    
    "triggerSpecificTests": "npx cypress run --spec cypress/integration/test_cases/*",
    
    "junit-merge": "npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml",
    
    "delete-junit-report": "rm -rf cypress/results/junit/results.xml",
    
    "delete-results": "rm -rf cypress/results/* || true",
    
    "mochawesome-merge": "npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json",
    
    "delete-mochawesome-separate-results": "rm -rf cypress/results/* || true",
    
    "delete-mochawesome-report": "rm -rf mochawesome-report/* || true",
    
    "cypress-regression-pack": "npm run delete-results && npm run delete-mochawesome-report && npm run triggerAllTests-headless && npm run mochawesome-merge",
    
    "cypress-retry": "CYPRESS_RETRIES=1 npm run triggerAllTests-headless"
