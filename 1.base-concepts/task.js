"use strict"
function solveEquation(a, b, c) {
  let d = b*b - 4*a*c;
  let arr = 0;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr = [-b/(2*a)]
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a) , (-b - Math.sqrt(d) )/(2*a)]
  };
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent/100)/12;
  let r = (amount - contribution) * (p + (p / (((1 + p)**countMonths) - 1)));
  let f = r * countMonths;
  
  return +f.toFixed(2);
}