const assert = require("assert");
const { calcFitness } = require("./app.js");
const r = calcFitness("male", 30, 170, 70, 1.2);
assert.strictEqual(r.bmi, 24.2);
assert.strictEqual(r.bmr, 1618);
console.log("BMI_TDEE_TESTS_PASSED");