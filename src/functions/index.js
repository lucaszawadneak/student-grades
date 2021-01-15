const { fetchSheet, writeSheet } = require("../services/api");

function calculateAverageGrade(fistTest, secondTest, thirdTest) {
  return Math.round(
    (Number(fistTest) + Number(secondTest) + Number(thirdTest)) / 3
  );
}

function failedByMissingClass(missedClasses) {
  return missedClasses > 15;
}

function scoreToPass(averageGrade) {
  return Math.round(100 - averageGrade);
}

async function handleAnalyseSheet(auth) {
  const studentSheet = await fetchSheet();
  let student;

  for (student = 0; student < studentSheet.length; student++) {
    const missedClasses = studentSheet[student][2];
    const failed = failedByMissingClass(missedClasses);
    const averageGrade = calculateAverageGrade(
      studentSheet[student][3],
      studentSheet[student][4],
      studentSheet[student][5]
    );
    const averageGradeString = averageGrade.toFixed(0);

    if (failed) {
      console.log(`${studentSheet[student][1]} reprovou por faltas!`);
      await writeSheet(student, ["Reprovou por faltas", 0], auth);

      continue;
    }

    if (averageGrade < 50) {
      console.log(
        `${studentSheet[student][1]} (${averageGradeString}) reprovou por nota!`
      );
      await writeSheet(student, ["Reprovou por nota", 0], auth);
      continue;
    } else if (averageGrade < 70) {
      console.log(
        `${studentSheet[student][1]} (${averageGradeString}) foi para a final!`
      );
      await writeSheet(
        student,
        ["Exame Final", scoreToPass(averageGrade)],
        auth
      );
      continue;
    }

    console.log(
      `${studentSheet[student][1]} (${averageGradeString}) está aprovado!`
    );
    await writeSheet(student, ["Aprovado", 0], auth);
  }

  console.log("\nMédias concluídas!");
}

module.exports = handleAnalyseSheet;
