const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require('dotenv');
require("dotenv").config();

// Load config
dotenv.config({ path: './config/config.env' })

const pushNotification = require('./push-notifications/push-notification')

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = process.env.PV_KEY;
const privateVapidKey = process.env.PRV_KEY;

webpush.setVapidDetails(
    process.env.WEBPUSH_DOMAIN,
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  if(!req.body) throw new Error();
  pushNotification(req.body)

});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));