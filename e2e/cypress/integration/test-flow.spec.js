import * as functions from '../data/functions';

const newValue = 300

describe('Modus Create - Cypress excersise', () => {
  before(() => {
    
    cy.request('https://budget.modus.app/budget').then(response => {
      expect(response.status).to.eq(200);
    });
    cy.visit('https://budget.modus.app/budget');
  });

  // User edits already entered data
  // it('Testing', () => {
  //   cy.get('tbody > :nth-child(1)').click();
  // });

  // Add button should be disabled when no value is added
  it('Add button is disabled when no value has been entered', () => {
    cy.get('button').should('be.disabled');
  });


  // New data added appears in the table
  it('Selected category, description and value are added to the table', () => {
    cy.addEntry('Income', 'Cypress exercise', newValue)
      .get('tbody tr:last-child td:nth-child(1)')
      .contains('Income')
      .get('tbody tr:last-child td:nth-child(2)')
      .contains('Cypress exercise')
      .get('tbody tr:last-child td:nth-child(3)')
      .contains(newValue);
  });

  // Incomes
  it('Incomes are relfected in Total Inflow field', () => {
    // Initial status of Incomes & Outcomes
    const currentIncome = functions.incomeNumber();
    // Add an income
    cy.addEntry('Income', 'Cypress exercise', newValue)
    // Get the previous inital total + newIncome
    const nextIncome = currentIncome + newValue;
    // New status of Incomes should equal nextIncome
    expect(nextIncome).to.equal(currentIncome + newValue);
  });

  // Outcomes
  it('Outcomes are relfected in Total Outflow field', () => {
    // Initial status of Outcomes
    let currentOutcome = functions.outcomeNumber()
    // Add an Outcome
    cy.addEntry('Home', 'Cypress exercise', newValue)
    // Get the previous inital total + newOutcome
    const nextOutcome = currentOutcome + newValue;
    // New status of Incomes should equal nextIncome
    expect(nextOutcome).to.equal(currentOutcome + newValue);

  });

  // Working Balance
  it('Added an Income = Total amount is reflected in Working balance field', () => {
    // Initial status of Incomes & Outcomes
    let currentIncome = functions.incomeNumber()
    let currentOutcome = functions.outcomeNumber()

    // Add an income
    cy.addEntry('Income', 'Cypress exercise', 300)

    // Get the current total amount after adding 
    let total = functions.totalNumber()
    
    // New Working balance should match incomes-outcomes
    let balance = (currentIncome - currentOutcome).toFixed(2)
    expect(total).to.equal(balance);
  });

  it('Added an Outcome = Total amount is reflected in Working balance field', () => {
    // Initial status of Incomes & Outcomes
    let currentIncome = functions.incomeNumber()
    let currentOutcome = functions.outcomeNumber()

    // Add an outcome
    cy.addEntry('Home', 'Cypress exercise', 500)

    // Get the current total amount after adding and outcome
    let total = functions.totalNumber()

    // New Working balance should match incomes-outcomes
    let balance = (currentIncome - currentOutcome).toFixed(2)
    expect(total).to.equal(balance);
  });




});
