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


driver.manage().window().maximize();
const newLocal =
 driver.get('http://desktop-llgeu3m:90/Account/Login').then(driver.findElement(By.name('UserName')).sendKeys('admin'));
 driver.findElement(By.name('Password')).sendKeys('password').then(driver.findElement(By.css('input[type="submit"]')).click());
 driver.sleep(5000);
 //let element = driver.findElement(By.xpath('.//*[text() = "Log off"]'));
 driver.wait(WebDriver.until.elementLocated(By.xpath('.//*[text() = "Log off"]'),30000));
 //driver.wait(until.elementTextIs(,"Hello Admin!"),10000));
 