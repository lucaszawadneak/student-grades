const { getData, setData } = require("../services/api");

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
  const data = await getData();
  let i;
  let length = data.length;

  for (i = 0; i < length; i++) {
    let missedClasses = data[i][2];
    const failed = failedByMissingClass(missedClasses);
    let averageGrade = calculateAverageGrade(
      data[i][3],
      data[i][4],
      data[i][5]
    );

    if (failed) {
      console.log(`${data[i][1]} reprovou por faltas!`);
      //   await setData(i, ["Reprovou por faltas", 0],auth);

      continue;
    }

    if (averageGrade < 50) {
      console.log(
        `${data[i][1]} (${averageGrade.toFixed(0)}) reprovou por nota!`
      );
      //   await setData(i, ["Reprovou por nota", 0],auth);
      continue;
    } else if (averageGrade < 70) {
      console.log(
        `${data[i][1]} (${averageGrade.toFixed(0)}) foi para a final!`
      );
      //   await setData(i, ["Exame Final", scoreToPass(averageGrade)],auth);
      continue;
    }

    console.log(`${data[i][1]} (${averageGrade.toFixed(0)}) está aprovado!`);
    // await setData(i, ["Aprovado", 0],auth);
  }
}

module.exports = handleAnalyseSheet;
