require("dotenv").config();

const handleAnalyseSheet = require("./functions");
const authorize = require("./services/auth");

console.log("----------------------------------------------");

console.log("Iniciando aplicação!\nCalculando média para os alunos.");

console.log("----------------------------------------------");

authorize(handleAnalyseSheet);

// const score = scoreToPass();

// console.log(score);
