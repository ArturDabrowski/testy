describe('Test show that all require fields are displaying properly', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
    isAngularSite(false);
    browser.get('https://sealsdev.lim.bz/');
  });



    it('Should check req note about login ', function(){
        
         login_page.loginBad(params.login.user, params.login.password);
        browser.driver.sleep(700);
         expect(login_page.allertLogin()).toEqual("The username or password is incorrect. Please try again.");


    });
    it('Should log in with no problem', function(){
        
        login_page.loginGood(params.login.user, params.login.password);
        home_page.logOut();
        
        
    });
});
