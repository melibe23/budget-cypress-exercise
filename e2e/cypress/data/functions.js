import {
  value,
  totalInflow,
  totalOutflow,
  totalBalance
} from "./selectors";

export function clearValue(value) {
  return Number(value.replace(/\$|,/g, ""));
}

export function valueInTable() {
  const valueInTable = Cypress.$(value).text()
  return clearValue(valueInTable)
}

export function incomeNumber() {
  const incomeTotal = Cypress.$(totalInflow).text();
  return clearValue(incomeTotal);
}

export function outcomeNumber() {
  const outcomeTotal = Cypress.$(totalOutflow).text();
  return clearValue(outcomeTotal);
}

export function totalNumber() {
  const total = Cypress.$(totalBalance).text();
  return clearValue(total);
}