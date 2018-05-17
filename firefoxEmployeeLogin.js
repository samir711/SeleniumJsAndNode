const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver').until;
const FirefoxProfile = require('firefox-profile');
const sleep = require('sleep');

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
//driver.manage().window().maximize();
const newLocal =
 driver.get('http://desktop-llgeu3m:90/Account/Login').then(driver.findElement(By.name('UserName')).sendKeys('admin'));
 driver.findElement(By.name('Password')).sendKeys('password').then(driver.findElement(By.css('input[type="submit"]')).click());
 driver.wait(WebDriver.until.elementLocated(By.xpath('.//*[contains(text(),"Log")]'),30000)); //driver.sleep(5000);
 

 let element = driver.findElement(By.xpath('.//a[contains(text(),"Details")]'));
 console.log('test value is ' + element.getAttribute('href'));
 //driver.wait(until.elementTextIs(,"Hello Admin!"),10000));
 