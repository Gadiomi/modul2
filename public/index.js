// index.js
// Логіка візуалізації даних
function visualizeData(
  dailyCalories,
  caloriesForWeightLoss,
  caloriesForWeightGain
) {
  const data = [
    { label: "Денна норма калорій", data: dailyCalories },
    { label: "Калорії для схуднення", data: caloriesForWeightLoss },
    { label: "Калорії для набору ваги", data: caloriesForWeightGain },
  ];

  // Отримання контексту для графіка
  const chartContainer = document.getElementById("chartContainer");
  const ctx = chartContainer.getContext("2d");

  // Знищення попереднього графіка, якщо він існує
  if (window.myChart) {
    window.myChart.destroy();
  }

  // Створення нового графіка
  window.myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((entry) => entry.label),
      datasets: [
        {
          label: "Обчислення",
          data: data.map((entry) => entry.data),
          backgroundColor: ["#ff9999", "#66b3ff", "#99ff99"],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Обчислення та результати" },
      responsive: false, // Вимикає автоматичне адаптування
      maintainAspectRatio: false, // Забороняє графіку зберігати пропорції
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
      },
    },
    // Додаємо атрибути width та height, які визначають розміри графіка
    width: 500,
    height: 500,
  });
}
