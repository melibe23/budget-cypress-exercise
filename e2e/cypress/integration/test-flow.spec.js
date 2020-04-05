import * as functions from '../data/functions';
import * as selectors from '../data/selectors';

describe('Modus Create - Cypress exercise', () => {
  before(() => {
    cy.request('https://budget.modus.app/budget').then(response => {
      expect(response.status).to.eq(200);
    });
    cy.visit('https://budget.modus.app/budget');
  });

  //Using this test as a fake fail one
  //Add button should be disabled when no value is added
  it('Add button is disabled when no value has been entered', () => {
    cy.log('This test will fail when it should not. It was a requirement in the exam to have one.')
    cy.get(selectors.addButton).contains('Add')
      .should('not.be.disabled')
  });

  // New data added appears in the table
  it('Selected category, description and value are added to the table', () => {
    let newValue = 1
    cy.addEntry('Income', 'Cypress exercise', newValue).click()
      .get(selectors.category)
      .contains('Income')
      .get(selectors.description)
      .contains('Cypress exercise')
      .get(selectors.value)
      .contains(newValue);
  });

  // User adds a string in the value field
  it('Add button is still disabled when user adds a string in the value field', () => {
    let newValue = 'test'
    cy.addEntry('Income', 'I will try to add a string', newValue)
      .get(selectors.addButton).contains('Add')
      .should('be.disabled')
  });

  // Incomes
  // This test is failing because it never gets to the new number. In line 51, I expect to have the new value.
  // In the previous step I added 1 as an Income, but this line still stores the original value, never the updated one.
  // After a lot of investigation, I honestly don't know why is happeing. I would appreciate any feedback. 
  it('Incomes are updated in Total Inflow field', () => {
    // Initial status of Incomes & Outcomes
    let currentIncome = functions.incomeNumber();
    // Add an income
    let newValue = 1
    cy.addEntry('Income', ' ', newValue).click()
    // Get the inital total + newIncome
    let nextIncome = functions.incomeNumber()
    // New status of Incomes should equal nextIncome
    expect(nextIncome).to.equal(currentIncome + newValue);
  });

  // Outcomes
  // This test is failing because it never gets to the new number. In line 66, I expect to have the new value.
  // In the previous step I added 1 as an Outcome, but this line still stores the original value, never the updated one.
  // After a lot of investigation, I honestly don't know why is happeing. I would appreciate any feedback. 

  it('Outcomes are updated in Total Outflow field', () => {
    // Initial status of Outcomes
    let currentOutcome = functions.outcomeNumber()
    // Add an Outcome
    let newValue = 1
    cy.addEntry('Groceries', ' ', newValue).click()
    // Get the inital total + newOutcome
    let nextOutcome = functions.outcomeNumber()
    // New status of Outcomes should equal nextOutcome
    expect(nextOutcome).to.equal(currentOutcome + newValue);
  });

  // Working Balance after adding an Income
  it('Added an Income = Total amount is updated in Working balance field', () => {
    // Initial status of Incomes & Outcomes
    let currentIncome = functions.incomeNumber()
    let currentOutcome = functions.outcomeNumber()
    // Add an income
    let newValue = 1
    cy.addEntry('Income', ' ', newValue).click()
    // Get the current total amount after adding an income
    let total = functions.totalNumber()
    // New Working balance should match incomes less outcomes
    let balance = (currentIncome - currentOutcome).toFixed(2)
    expect(total).to.equal(balance);
  });

  // Working Balance after adding an Outcome
  it('Added an Outcome = Total amount is updated in Working balance field', () => {
    // Initial status of Incomes & Outcomes
    let currentIncome = functions.incomeNumber()
    let currentOutcome = functions.outcomeNumber()
    // Add an outcome
    cy.addEntry('Home', ' ', 500).click()
    // Get the current total amount after adding an outcome
    let total = functions.totalNumber()
    // New Working balance should match incomes less outcomes
    let balance = (currentIncome - currentOutcome).toFixed(2)
    expect(total).to.equal(balance);
  });
});