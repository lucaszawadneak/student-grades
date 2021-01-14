const { scoreToPass } = require("./functions");

console.log("Iniciando aplicação!\nCalculando média para os alunos.\n");

const score = scoreToPass();

console.log(score);
