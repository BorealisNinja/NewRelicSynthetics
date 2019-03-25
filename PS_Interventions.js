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
  //Find PowerSchool Interventions
          return $browser.waitForAndFindElement($driver.By.id('link-44eb3c89693c14aa5d2018cbb6d1b23f'));
}).then(function(){
  //Click PowerSchool Interventions Link
return $browser.findElement($driver.By.id('link-44eb3c89693c14aa5d2018cbb6d1b23f')).click();
}).then(function(){
  //Switch Tabs
    $browser.sleep(5000)
    return $browser.getAllWindowHandles()
}).then(function(handles){
    return $browser.switchTo().window(handles[1]);
}).then(function(){
    $browser.sleep(5000)
}).then(function(){
  //Find Quick Access Dock
return $browser.findElement($driver.By.id('ctl00_TNPageContent_radDockQuickAccess_T'));
})
;
