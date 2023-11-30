// app.js
// Логіка калькулятора
function calculate() {
  // Отримання значень з полів введення
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const goal = document.getElementById("goal").value;

  // Розрахунок даних
  let dailyCalories;
  let caloriesForWeightLoss;
  let caloriesForWeightGain;

  switch (gender) {
    case "male":
      dailyCalories = 10 * weight + 6.25 * height - 5 * age + 5;
      break;
    case "female":
      dailyCalories = 10 * weight + 6.25 * height - 5 * age - 161;
      break;
  }

  switch (goal) {
    case "loseWeight0.5":
      caloriesForWeightLoss = dailyCalories - 500;
      break;
    case "loseWeight1":
      caloriesForWeightLoss = dailyCalories - 1000;
      break;
    case "loseWeight2":
      caloriesForWeightLoss = dailyCalories - 2000;
      break;
    case "gainWeight0.5":
      caloriesForWeightGain = dailyCalories + 500;
      break;
    case "gainWeight1":
      caloriesForWeightGain = dailyCalories + 1000;
      break;
    case "gainWeight2":
      caloriesForWeightGain = dailyCalories + 2000;
      break;
  }

  // Відображення результату в таблиці
  const resultTable = document.getElementById("resultTable");
  const newRow = resultTable.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  cell1.innerHTML = age;
  cell2.innerHTML = translateGender(gender);
  cell3.innerHTML = height;
  cell4.innerHTML = weight;
  cell5.innerHTML = translateGoal(goal);

  // Візуалізація даних
  visualizeData(dailyCalories, caloriesForWeightLoss, caloriesForWeightGain);
}

// Функція для перекладу значень "Стать" українською
function translateGender(gender) {
  return gender === "male" ? "Чоловік" : "Жінка";
}

// Функція для перекладу значень "Ціль" українською
function translateGoal(goal) {
  switch (goal) {
    case "loseWeight0.5":
      return "Схуднути на 0.5 кг/тиждень";
    case "loseWeight1":
      return "Схуднути на 1 кг/тиждень";
    case "loseWeight2":
      return "Схуднути на 2 кг/тиждень";
    case "gainWeight0.5":
      return "Набрати вагу на 0.5 кг/тиждень";
    case "gainWeight1":
      return "Набрати вагу на 1 кг/тиждень";
    case "gainWeight2":
      return "Набрати вагу на 2 кг/тиждень";
    default:
      return "";
  }
}
