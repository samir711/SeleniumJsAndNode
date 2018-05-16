const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver').until;

/** 
 * Set chrome command line options/switches
 */
let chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");
chromeOptions.addArguments("chorme.switches", "--disable-extensions");

let path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let driver = new WebDriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
const newLocal = driver.get('http://www.google.com/ncr')
                       .then(driver.findElement(By.name('q')).sendKeys('webdriver', WebDriver.Key.RETURN))
driver.wait(until.titleIs('webdriver - Google Search'), 6000).then(_ => driver.quit());