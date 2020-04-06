import * as functions from "../data/functions";
import * as selectors from "../data/selectors";

describe("Modus Create - Cypress exercise", () => {
  before(() => {
    // cy.request("https://budget.modus.app/budget").then(response => {
    //   expect(response.status).to.eq(200);
    // });
    cy.visit("https://budget.modus.app/budget");
  });

  //Using this test as a fake fail one
  //Add button should be disabled when no value is added
  it("Add button is disabled when no value has been entered", () => {
    cy.log(
      "This test will fail when it should not. It was a requirement in the exam to have one."
    );
    cy.get(selectors.addButton)
      .contains("Add")
      .should("not.be.disabled");
  });

  // New data added appears in the table
it('Selected category, description and value are added to the table', () => {
		let newValue = 133;
		cy
			.addEntry('Income', 'Cypress exercise', newValue)
			.click()
			.get(selectors.category)
			.contains('Income')
			.get(selectors.description)
			.contains('Cypress exercise')
			.get(selectors.value)
			.then(($value) => {
				const txt = $value.text();
				const num = functions.clearValue(txt);
				expect(num).to.equal(newValue);
			});
	});

  // User adds a string in the value field
  it("Add button is still disabled when user adds a string in the value field", () => {
    let newValue = "test";
    cy.addEntry("Income", "I will try to add a string", newValue)
      .get(selectors.addButton)
      .contains("Add")
      .should("be.disabled");
  });

  // Incomes
  it("Incomes are updated in Total Inflow field", () => {
    cy.log(functions.incomeNumber());
    cy.get(selectors.totalInflow)
      .invoke("text")
      .then(originalVal => {
        const newValue = 1;
        cy.addEntry("Income", " ", newValue).click();
        cy.get(selectors.totalInflow)
          .invoke("text")
          .should(updatedVal => {
            const originalIncome = functions.clearValue(originalVal);
            const nextIncome = functions.clearValue(updatedVal);
            expect(nextIncome).to.equal(originalIncome + newValue);
          });
      });
  });

  // Outcomes
  it("Outcomes are updated in Total Outflow field", () => {
    cy.get(selectors.totalOutflow)
      .invoke("text")
      .then(originalVal => {
        let newValue = 1;
        cy.addEntry("Groceries", " ", newValue).click();
        cy.get(selectors.totalOutflow)
          .invoke("text")
          .should(updatedVal => {
            const originalOutcome = functions.clearValue(originalVal);
            const nextOutcome = functions.clearValue(updatedVal);
            expect(nextOutcome).to.equal(originalOutcome + newValue);
          });
      });
  });

  // Working Balance after adding an Income
  it("Added an Income = Total amount is updated in Working balance field", () => {
    let currentIncome = functions.incomeNumber();
    let currentOutcome = functions.outcomeNumber();
    let newValue = 1;
    cy.addEntry("Income", " ", newValue).click();
    let total = functions.totalNumber();
    let balance = Number((currentIncome - currentOutcome).toFixed(2));
    expect(total).to.equal(balance);
  });

  // Working Balance after adding an Outcome
  it("Added an Outcome = Total amount is updated in Working balance field", () => {
    let currentIncome = functions.incomeNumber();
    let currentOutcome = functions.outcomeNumber();
    cy.addEntry("Home", " ", 500).click();
    let total = functions.totalNumber();
    let balance = Number((currentIncome - currentOutcome).toFixed(2));
    expect(total).to.equal(balance);
  });
});
