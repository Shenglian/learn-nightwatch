// utils.js
module.exports = function (browser) {
  this.goToGoogleMaximizeSite = function () {
    browser
    .windowMaximize()
    .url('http://www.google.com')
    .waitForElementVisible('body', 1000);
    return browser;
  };
  this.goToGoogleResizeSite = function () {
    browser
    .resizeWindow(600, 300)
    .url('http://www.google.com')
    .waitForElementVisible('body', 1000);
    return browser;
  };
  return this;
};