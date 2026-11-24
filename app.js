function calcFitness(gender, age, heightCm, weightKg, activity = 1.375) {
  const h = Math.max(50, Number(heightCm) || 170);
  const w = Math.max(20, Number(weightKg) || 65);
  const a = Math.max(10, Number(age) || 30);
  const act = Math.max(1.0, Number(activity) || 1.2);
  const bmi = Math.round((w / ((h / 100) ** 2)) * 10) / 10;
  const bmr = Math.round(10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161));
  const tdee = Math.round(bmr * act);
  const cutCalories = Math.max(bmr, tdee - 400);
  const proteinGrams = Math.round(w * 1.6);
  return { bmi, bmr, tdee, cutCalories, proteinGrams };
}
if (typeof document !== "undefined") {
  const ids = ["genderInput", "ageInput", "heightInput", "weightInput", "actInput"];
  function render() {
    const [g, a, h, w, act] = ids.map(id => document.getElementById(id).value);
    const res = calcFitness(g, a, h, w, act);
    document.getElementById("bmiEl").textContent = res.bmi;
    document.getElementById("bmrEl").textContent = `${res.bmr} kcal`;
    document.getElementById("tdeeEl").textContent = `${res.tdee} kcal`;
    document.getElementById("cutEl").textContent = `${res.cutCalories} kcal / ${res.proteinGrams}g 蛋白`;
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcFitness };