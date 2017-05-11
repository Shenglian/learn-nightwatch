var utils = require('./utils');

module.exports = {
  '@tags': ['Google-Test'],
  'Open mix the website': function (browser) {
    utils(browser).goToGoogleMaximizeSite()
    browser.end();
  },
  'Open resize the website': function (browser) {
    utils(browser).goToGoogleResizeSite()
    browser.end();
  },
  'SaveScreenshot Google Page' : function (browser) {
      utils(browser).goToGoogleMaximizeSite()
      browser.assert.title('Google')
      browser.assert.visible('input[type=text]')
      browser.setValue('input[type=text]', 'rembrandt van rijn')
      browser.saveScreenshot('screenshots' + '/600.png')
      browser.end();
  },
  'SaveScreenshot more photos' : function (browser) {

      var save_directory = 'screenshots',
          viewport_widths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];
  
      browser.url('http://www.google.com')
      .waitForElementVisible('body', 1000);
        
      viewport_widths.forEach(function(width){
        browser
          .resizeWindow(width, 300)
          .saveScreenshot(save_directory + '/' + width + '.png')
      });
        
      browser.end();
  },
};