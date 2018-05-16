/*
https://cnpmjs.org/package/firefox-profile


*/


const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver').until;
const FirefoxProfile = require('firefox-profile');

/** 
 * Set chrome command line options/switches
 */
const fp = new FirefoxProfile();

fp.setPreference("plugin.state.npctrl", 2);
fp.setPreference("browser.startup.homepage", "about:blank");
fp.setPreference("startup.homepage_welcome_url", "about:blank");
fp.setPreference("startup.homepage_welcome_url.additional", "about:blank");
fp.setPreference("plugins.default.state", 2);
fp.setPreference("security.sandbox.content.level", 4);
fp.setPreference("devtools.selfxss.count", 100);
fp.updatePreferences();

let firefoxOptions = new firefox.Options();
firefoxOptions.setProfile('fp');

let path = require('geckodriver').path;
var service = new firefox.ServiceBuilder(path).build();
// firefox.
// firefox.setDefaultService(service);

let driver = new WebDriver.Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build();
const newLocal = driver.get('http://www.google.com/ncr')
                  //     .then(driver.findElement(By.name('q')).sendKeys('webdriver', WebDriver.Key.RETURN))
//driver.wait(until.titleIs('webdriver - Google Search'), 6000).then(_ => driver.quit());