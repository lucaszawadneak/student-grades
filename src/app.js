require("dotenv").config();

const { scoreToPass, calculateAverageGrade } = require("./functions");
const { getData, setData } = require("./services/api");
const { authorize } = require("./services/auth");
const fs = require("fs");

console.log("----------------------------------------------");

console.log("Iniciando aplicação!\nCalculando média para os alunos.");

console.log("----------------------------------------------");

authorize(
  (async () => {
    const data = await getData();
    let i;
    let length = data.length;

    for (i = 0; i < length; i++) {
      let missedClasses = data[i][2];
      let averageGrade = calculateAverageGrade(
        data[i][3],
        data[i][4],
        data[i][5]
      );

      if (missedClasses > 15) {
        console.log(`${data[i][1]} reprovou por faltas!`);
        //   await setData(i, ["Reprovou por faltas", 0]);

        continue;
      }

      if (averageGrade < 50) {
        console.log(
          `${data[i][1]} (${averageGrade.toFixed(0)}) reprovou por nota!`
        );
        //   await setData(i, ["Reprovou por nota", 0]);
        continue;
      } else if (averageGrade < 70) {
        console.log(
          `${data[i][1]} (${averageGrade.toFixed(0)}) foi para a final!`
        );
        //   await setData(i, ["Exame Final", scoreToPass(averageGrade)]);
        continue;
      }

      console.log(`${data[i][1]} (${averageGrade.toFixed(0)}) está aprovado!`);
      // await setData(i, ["Aprovado", 0]);
    }
  })()
);

// const score = scoreToPass();

// console.log(score);
