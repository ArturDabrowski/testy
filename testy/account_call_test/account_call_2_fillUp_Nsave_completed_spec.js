
describe('Test trying to fill up all required fields and save form', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
      isAngularSite(false);
    browser.get('https://dbcseals.com/#!/');
  });




   it('should - fill up all fields and save activity Account Call when completed', function(){

    
            
        // home_page = login_page.loginGood(params.login.user, params.login.password);
       isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();

        var account_call = addActivity_page.addActivityAC();
        
        account_call.clickSaveBtn();
        account_call.clickCompleted();
        account_call.fillUpFieldsCompleted();
            
        expect(account_call.getAllertStatus()).toEqual("");
        expect(account_call.getAllertAccount()).toEqual("");
        expect(account_call.getAllertStartTime()).toEqual("");
        expect(account_call.getAllertEndTime()).toEqual("");
        expect(account_call.getAllertObjective()).toEqual("");
        expect(account_call.getAllertWorkWith()).toEqual("");
        expect(account_call.getAllertNotes()).toEqual("");
      
         
        account_call.clickSaveBtn();
        browser.waitForAngular();
        browser.driver.sleep(100);
        expect(account_call.getTextAccepted()).toEqual("Success");
        account_call.clickClose();
       
       
       
       
    
        
       



    });
    
     });