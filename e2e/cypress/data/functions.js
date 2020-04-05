import * as selectors from '../data/selectors';


export function incomeNumber() {
  const incomeTotal = Cypress.$('#root > main > section > div > div > div:nth-child(1) > div > div:first-child')[0]
    .innerText;
  const cleanValues = incomeTotal.replace(/\$|,/g, '');
  const numbers = Number(cleanValues);
  return numbers;
}

export function outcomeNumber() {
  const outcomeTotal = Cypress.$('#root > main > section > div > div > div:nth-child(3) > div > div:first-child')[0]
    .innerText;
  const cleanValues = outcomeTotal.replace(/\$|,/g, '');
  const numbers = Number(cleanValues);
  return numbers;
}

export function totalNumber() {
  const total = Cypress.$('#root > main > section > div > div > div:nth-child(5) > div > div:first-child')[0]
    .innerText;
  const cleanValues = total.replace(/\$|,/g, '');
  const numbers = Number(cleanValues);
  const nodecimal = numbers.toFixed(2)
  return nodecimal;
}