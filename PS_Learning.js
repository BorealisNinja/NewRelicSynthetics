/**
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

var assert = require('assert');

$browser.manage().timeouts().pageLoadTimeout(140000);

$browser.get("https://premier.k12northstar.org/teachers/pw.html").then(function(){
//Find the user name field by specifying its id, then enter the user name.
    return $browser.findElement($driver.By.id("fieldUsername")).sendKeys("f361248");
}).then(function(){
//Find the password field by specifying its id, then enter the password
    return $browser.findElement($driver.By.id("fieldPassword")).sendKeys($secure.F361248_PASSWORD);
}).then(function(){
//Click the Sign In button.
    return $browser.findElement($driver.By.id("btnEnter")).click();
}).then(function(){
//Find and click App Tray Button
    return $browser.findElement($driver.By.id("link-icon-btn-pluginLinkList")).click();
}).then(function(){
  //Find PowerSchool Learning
          return $browser.waitForAndFindElement($driver.By.id('link-8d7a218a7c8ba1d8aba88509e03a06b4'));
}).then(function(){
  //Click PowerSchool Learning Link
return $browser.findElement($driver.By.id('link-8d7a218a7c8ba1d8aba88509e03a06b4')).click();
}).then(function(){
  //Switch Tabs
    $browser.sleep(7000)
    return $browser.getAllWindowHandles()
}).then(function(handles){
    return $browser.switchTo().window(handles[1]);
}).then(function(){
    $browser.sleep(7000)
}).then(function(){
  //Find My Classes link
return $browser.waitForAndFindElement($driver.By.id('myclasses_lnk'));
})
;
