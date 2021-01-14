function calculateAverageGrade(fistTest, secondTest, thirdTest) {
  return Math.round(
    (Number(fistTest) + Number(secondTest) + Number(thirdTest)) / 3
  );
}

function failedByMissingClass() {
  return false;
}

function scoreToPass(averageGrade) {
  return Math.round(100 - averageGrade);
}

module.exports = { scoreToPass, failedByMissingClass, calculateAverageGrade };
