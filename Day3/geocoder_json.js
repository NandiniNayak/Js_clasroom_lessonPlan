const http = require("https");
var dataResponse = "";

const URL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBzCLtntxL6RAc06HearVEPBO-1Roubbtw";

http.get(URL,(resp) => {
  resp.on("data", (resp) => {
    dataResponse += resp;
  }
  resp.on("end", () => {
    console.log(data);
  })
})
