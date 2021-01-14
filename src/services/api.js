const axios = require("axios");
const { google } = require("googleapis");

async function getData() {
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

async function setData(locationID, data) {
  const correctLine = locationID + 4;
  let locationString = `engenharia_de_software!G${correctLine}:H${correctLine}`;
  console.log(locationString);

  const sheets = google.sheets({ version: "v4", auth });
}

module.exports = { getData, setData };
