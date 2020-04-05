Read me in order to run the Cypress.io test

## Once you download the repo you will find a folder at the top called ‘e2e’: ##

Inside that folder the following files and folders.

1. Folder called "cypress". Where you will find:

 - /data folder: Where a functions.js contains functions needed to run the tests and selectors.js contains the most of the selectors used here.
 
  - /selectors folder: Where a functions.js file is located. This files contains functions needed to run the tests.

 - /integration folder: Test files are located here

 -	/plugin folder: Cypress includes the plugins index.js before every single spec file it runs.

 - /reports folder: The two main files here to be aware of are
  >  	report.html - The rendered report file
  >  	report.json - The raw json output used to render the report

 - /screenshots folder: Cypress will automatically capture screenshots when a failure happens during cypress run and will be located here. Screenshots on failure are not automatically taken during cypress open.

 -	/support/commands.js and index.js: The support file is a great place to put reusable behavior such as Custom Commands or global overrides that you want applied and available to all of your spec files.

2. A package-lock.json file (this file was automatically generated for any operations where npm modifies either the node_modules tree, or package.json).

3. A package.json file that you will need in order to install all the dependencies.

4. This Readme file.


## STEPS TO REPRODUCE IN ORDER TO RUN TESTS WITH CYPRESS.IO

You need to have installed NodeJS in your machine. 
a)	In your terminal go to /budgeting-master/e2e folder and run command

 ```$ npm install```

This will install all the dependencies required for the project.

b) A 'node_module' folder should have been created.
c) Now you can run the tests by running the following command (be sure you are inside /e2e, otherwise the commands won’t work).

In order to run it using Cypress GUI:
> ```$ npx cypress open```

In order to run it using headless AND to generate a report use this command. Notice that adding '--reporter mochawesome' won't work with the command above.  

> ```$ npx cypress run --reporter mochawesome```

d) Tests should be run and a Report JSON and HTML should have been saved inside e2e/reports. Open the html file in order to see the outcome.

# Test plan

This document describes the testing approach that will drive the testing of Budgeting Application. Based on its description, this application tracks inflow and outflow shows the remaining budget and produces reports with charts. 
 
The objective of the test is to verify that the main functionalities are working as intended. Note to the reader. This testing will only cover functionality testing. The following is out of scope:
- Visual testing
- Cross-browser testing (I will only cover Chrome browser, although you can add ```--browser {browsername}``` to the command and test it in all the browsers that Cypress supports installed in your machine)
- Mobile testing
 
In this section, I will provide User Stories specifications of all those features that have been identified as features to be tested. They are written in BDD.


#### Feature: Add button is disabled when no value has been entered (This test will fail per request from Modus Create) ####

> As a user

> I want not to be able to add content to the table if none value has been added

> So I can only add items with correct data

#### Feature: Selected category, description and value are added to the table ####

> As a user

> I want to add category, description, and value to the table

> So I can see my income/outcome reflected in the table

#### Feature: Incomes are updated in Total Inflow field ####

> As a user 

> I want to be able to add an income

> So I can see the Total Inflow field correctly updated 

#### Feature: Incomes are updated in Total Outflow field ####

> As a user 

> I want to be able to add an outcome

> So I can see the Total Outflow field correctly updated 

#### Feature: Added an Income = Total amount is updated in Working balance field ####

> As a user

> I want to be able to add an income

> So I can see my Working balance field updated

#### Feature: Added an Outcome = Total amount is updated in Working balance field ####

> As a user 

> I want to be able to add an outcome

> So I can see my Working balance field updated


## There are plenty of more features that could be tested but weren't covered during this exercise:

#### Feature: Edit view 

> As a user 

> I want to be able to see edition tools

> So I can edit an already entered data


#### Feature: Edit view - Update functionality

> As a user 

> I want to be able to update with a change the current data

> So I can see my change reflected in the table


#### Feature: Edit view - Delete functionality

> As a user 

> I want to be able to delete the current data

> So I can see my change reflected in the table

#### Feature: Edit view - Cancel functionality

> As a user 

> I want to be able to cancel my edition

> So I can see no change reflected in the table

### Take into account that features related to the Reports tab were also not part of the scope of this exercise so I didn't cover them. 

