// Оголошення enum для днів тижня
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// Функція, яка перевіряє, чи є день вихідним
const isWeekend = (day: DayOfWeek): boolean => {
  // Перевірка, чи є день суботою або неділею
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклади використання функції
console.log(isWeekend(DayOfWeek.Monday)); // false
console.log(isWeekend(DayOfWeek.Saturday)); // true
