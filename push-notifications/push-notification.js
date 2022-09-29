const webpush = require("web-push");

const pushNotification = (reqBody) => {
    const subscription = reqBody;
  
    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));

}

module.exports = pushNotification;