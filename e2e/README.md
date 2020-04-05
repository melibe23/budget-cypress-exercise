Once you download the repo you will find a folder at the top called ‘e2e’:

Inside that folder the following files and folders:

1.	Folder called "cypress". Where you will find:
·   	/integration folder: Test files are located here
·   	/data folder: Where I saves some functions I needed during this test. 
·   	/plugin folder: Cypress includes the plugins index.js before every single spec file it runs.
·   	/support/commands.js and index.js: The support file is a great place to put reusable behaviour such as Custom Commands or global overrides that you want applied and available to all of your spec files.

2.	/mochawesome-report: The two main files here to be aware of are
·  	mochawesome.html - The rendered report file
·  	mochawesome.json - The raw json output used to render the report
3.	A package-lock.json file (this file was automatically generated for any operations where npm modifies either the node_modules tree, or package.json).
4.	A package.json file that you will need in order to install all the dependencies.
 
STEPS TO REPRODUCE IN ORDER TO RUN TESTS WITH CYPRESS.IO

You need to have installed NodeJS in your machine. 

a)	Clone this repo
b)  In your terminal go to /budget-cypress/exercise/e2e folder and run command

 ```$ npm install```

This will install all the dependencies required for the project.

b) A 'node_module' folder should have been created.
c) Now you can run the tests by running the following command (be sure you are inside /e2e, otherwise the commands won’t work).

In order to run it using Cypress GUI:

$ npx cypress open --reporter mochawesome
In order to run it using headless:

$ npx cypress run --reporter mochawesome

d) Test should be run and a Report JSON and HTML should have been saved inside e2e/mochawesome-report.
