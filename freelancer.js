// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!
export const NUMBER_OF_HOURS_PER_DAY = 8;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * NUMBER_OF_HOURS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * NUMBER_OF_HOURS_PER_DAY));
  throw new Error('Implement the daysInBudget function');
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS = 22; 
  let ratePerDay = ratePerHour * NUMBER_OF_HOURS_PER_DAY;
  let daysLeftAfterMonths = numDays % BILLABLE_DAYS ;
  let numMonthsWithDiscount = Math.floor(numDays / BILLABLE_DAYS );
  let pricePerMonth = ratePerDay * BILLABLE_DAYS ;
  let priceDiscountedRatePerMonth = pricePerMonth * discount;
  let totalDiscountedRates = (pricePerMonth - priceDiscountedRatePerMonth) * numMonthsWithDiscount;
  let total = totalDiscountedRates + (ratePerDay * daysLeftAfterMonths);
  return Math.ceil(total);
  throw new Error('Implement the priceWithMonthlyDiscount function');
}