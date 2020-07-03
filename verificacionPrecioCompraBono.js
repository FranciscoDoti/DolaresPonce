const {Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
const { expect }  = require('chai');
var driver;


(async function instanciarChromeDriver() {
    this.driver = await new Builder().usingServer('https://zalenium.aper.cloud/wd/hub').forBrowser('chrome').build();
    await this.driver.get('https://clientes.balanz.com/');
    await this.driver.findElement(By.xpath('//input[@name="username"]')).sendKeys('briandponce');
    await this.driver.findElement(By.xpath('//input[@name="password"]')).sendKeys('47889189Brian');
    await this.driver.findElement(By.xpath('//a[.="Ingresar"]')).click();
    await this.driver.wait(until.elementLocated(By.xpath('//a[.="WATCHLISTS"]')));
    await this.driver.findElement(By.xpath('//a[.="WATCHLISTS"]')).click();
    await this.driver.sleep(2000);
    await this.driver.wait(until.elementLocated(By.xpath('//tr[@class="sui-alt-row"]/td[5]')));
    var valorCompra = await this.driver.findElement(By.xpath('//tr[@class="sui-alt-row"]/td[5]')).getText();
    await console.log('valor compra = ' + valorCompra);
    expect(parseFloat(valorCompra), "error").to.be.greaterThan(1.310);
    
})();

