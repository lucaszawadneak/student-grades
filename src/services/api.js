const axios = require("axios");
const { google } = require("googleapis");
const sheets = google.sheets("v4");

async function fetchSheet() {
  console.log("Buscando dados...\n");

  let data = undefined;
  await axios
    .get(
      `https://sheets.googleapis.com/v4/spreadsheets/1rsnktYKqpbB7B7xSMGUEtU6ka161SlCe9UxhCuRho3Y/values/engenharia_de_software!A4:F27?key=${process.env.API_KEY}`
    )
    .then((response) => (data = response.data.values))
    .catch((err) => console.log(err.message));

  if (data) {
    return data;
  }

  console.log("Erro ao buscar dados!");
  return [];
}

async function writeSheet(studentID, data, auth) {
  const correctLine = studentID + 4;
  const locationString = `engenharia_de_software!G${correctLine}:H${correctLine}`;

  const request = {
    spreadsheetId: "1rsnktYKqpbB7B7xSMGUEtU6ka161SlCe9UxhCuRho3Y",
    range: locationString,
    valueInputOption: "RAW",
    resource: {
      values: [data],
    },
    auth,
  };

  await sheets.spreadsheets.values
    .update(request)
    .catch((err) => console.log(err.message));
}

module.exports = { fetchSheet, writeSheet };
