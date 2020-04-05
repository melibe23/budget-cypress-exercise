# Readme in order to run de Cypress.io test

Once you download the repo you will find a folder at the top called ‘e2e’:

## ‘e2e’:

Inside that folder the following files and folders.

Folder called "cypress". Where you will find:
a.   	/integration folder: Test files are located here

b.   	/plugin folder: Cypress includes the plugins index.js before every single spec file it runs.

c.   	/support/commands.js and index.js: The support file is a great place to put reusable behaviour such as Custom Commands or global overrides that you want applied and available to all of your spec files.

2.	/mochawesome-report: The two main files here to be aware of are
·  	mochawesome.html - The rendered report file
·  	mochawesome.json - The raw json output used to render the report
3. A package-lock.json file (this file was automatically generated for any operations where npm modifies either the node_modules tree, or package.json).
4. A package.json file that you will need in order to install all the dependencies.


## STEPS TO REPRODUCE IN ORDER TO RUN TESTS WITH CYPRESS.IO

You need to have installed NodeJS in your machine. 
a)	In your terminal go to /budgeting-master/e2e folder and run command

 ```$ npm install```

This will install all the dependencies required for the project.

b) A 'node_module' folder should have been created.
c) Now you can run the testS by running the following command (be sure you are inside /e2e, otherwise the commands won’t work).

In order to run it using Cypress GUI:
```$ npx cypress open --reporter mochawesome```

In order to run it using headless:
```$ npx cypress run --reporter mochawesome```

d) Test should be run and a Report JSON and HTML should have been saved inside e2e/mochawesome-report.

# Testplan

This document describes the testing approach that will drive the testing of Budgeting Application. Based on its description, this application tracks inflow and outflow shows the remaining budget and produces reports with charts. 
 
The objective of the test is to verify that these functionalities are working as intended. Note to the reader. This testing will only cover functionality testing. The following is out of scope:
Visual testing
Cross-browser testing (I will only cover Chrome browser)
Mobile testing
 
In this section, I will provide a list of all those items that have been identified as features to be tested.
