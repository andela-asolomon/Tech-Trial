var development = {
  firebase: {
    rootRefUrl: "https://crossover-test.firebaseio.com/",
    serverUID: "TechTrial",
    secretKey: "spIZ4ZZ1ZbbPucasCFv6sGA9znxDZARxZY7uGBUK"
  }
};

var test = {
  firebase: {
    rootRefUrl: "https://crossover-test.firebaseio.com/",
    serverUID: "TechTrial",
    secretKey: "spIZ4ZZ1ZbbPucasCFv6sGA9znxDZARxZY7uGBUK"
  }
};

var production = {
  firebase: {
    rootRefUrl: process.env.FB_URL,
    serverUID: process.env.FB_SERVER_UID,
    secretKey: process.env.FB_SECRET_KEY
  }
};

var config = {
  development: development,
  test: test,
  production: production,
};
module.exports = config;
