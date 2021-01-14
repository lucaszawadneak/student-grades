const https = require("https");

export function getData() {
  https.get(
    "https://docs.google.com/spreadsheets/d/1rsnktYKqpbB7B7xSMGUEtU6ka161SlCe9UxhCuRho3Y/edit#gid=0",
    (res) => {
      let data = "";

      if (res.data) {
        console.log(res.data);
      }
    }
  );
}

export function setColumn(id, data) {
  //
}
