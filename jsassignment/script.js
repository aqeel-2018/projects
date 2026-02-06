// Function to parse input string into array of numbers
function parseGrades(input) {
  return input.split(',')
              .map(s => s.trim())
              .map(Number)
              .filter(n => !isNaN(n) && n >= 0 && n <= 100);
}

// Calculate average grade
function calculateAverage(grades) {
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  return grades.length ? total / grades.length : 0;
}

// Find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let grade of grades) {
    if (grade > highest) {
      highest = grade;
    }
  }
  return highest;
}

// Find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let grade of grades) {
    if (grade < lowest) {
      lowest = grade;
    }
  }
  return lowest;
}

// Count pass and fail students
function countPassFail(grades, passingScore = 50) {
  let passed = 0;
  let failed = 0;
  for (let grade of grades) {
    if (grade >= passingScore) {
      passed++;
    } else {
      failed++;
    }
  }
  return { passed, failed };
}

// Convert numeric grade to letter
function getLetterGrade(grade) {
  if (grade >= 90) return 'A';
  else if (grade >= 80) return 'B';
  else if (grade >= 70) return 'C';
  else if (grade >= 60) return 'D';
  else return 'F';
}

// Generate report text
function generateReport(grades) {
  if (grades.length === 0) return "No valid grades entered.";

  const average = calculateAverage(grades);
  const highest = findHighestGrade(grades);
  const lowest = findLowestGrade(grades);
  const { passed, failed } = countPassFail(grades);

  let report = "Class Performance Report:\n";
  report += "-------------------------\n";
  report += `Average Grade: ${average.toFixed(2)}\n`;
  report += `Highest Grade: ${highest}\n`;
  report += `Lowest Grade: ${lowest}\n`;
  report += `Students Passed: ${passed}\n`;
  report += `Students Failed: ${failed}\n\n`;
  report += "Grades and Letter Grades:\n";

  for (let i = 0; i < grades.length; i++) {
    report += `Student ${i + 1}: ${grades[i]} (${getLetterGrade(grades[i])})\n`;
  }

  return report;
}

// Main function triggered on button click
function analyzeGrades() {
  const input = document.getElementById('gradesInput').value;
  const grades = parseGrades(input);

  if (grades.length === 0) {
    document.getElementById('reportOutput').textContent = "Please enter valid grades between 0 and 100.";
    return;
  }

  const report = generateReport(grades);
  document.getElementById('reportOutput').textContent = report;
}

// Add event listener to button after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('analyzeBtn').addEventListener('click', analyzeGrades);
});