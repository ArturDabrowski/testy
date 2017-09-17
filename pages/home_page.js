requirePAGES ('addActivity_page');
requirePAGES ('activity_page');
var home_page = function(){

    var addActivity = element(by.css('[ng-class="{active:isActive(\'/add-activity\')}"]'));
    var activityGo = element(by.css('[ng-class="{active:isActive(\'/calendar\')}"]'));
    var accountName = element(by.id('codeNavPopover'));
    var client = element(by.css('[data_popover="#codeNavPopover"]'));
    var logout = element(by.css('[ng-click="go(\'/logout\')"]'));

    this.addActivity = function(){
        
        addActivity.click();
        return requirePAGES('addActivity_page');

    };
    this.activityGo = function(){
        activityGo.click();
        return requirePAGES('activity_page');
    }

    this.logOut = function(){
  
        browser.executeScript("arguments[0].click();", logout.getWebElement());
        browser.driver.sleep(500);

    };



};
module.exports = new home_page();
