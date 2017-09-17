requirePAGES ('home_page');
var login_page = function(){
    
    var username = element(by.model('user.username'));
    var password = element(by.model('user.password'));
    var enterBtn = element(by.css('[ng-click="login(loginForm)"]'));
    var allertLogin2 = element(by.css('[ng-show="invalidLogin"]'));

    this.loginGood = function(username2,password2){
    
        username.clear();
        password.clear();
        username.sendKeys(username2);
        password.sendKeys(password2);
        enterBtn.click();
        return requirePAGES('home_page');

    };

    this.loginBad = function(username2,password2){
   


        username.clear();
        password.clear();
        username.sendKeys(username2+'ddd');
        password.sendKeys(username2+'ddd');
        enterBtn.click();



    };
    this.allertLogin = function(){
        
        return allertLogin2.getText(); 
    };

};
module.exports = new login_page();
