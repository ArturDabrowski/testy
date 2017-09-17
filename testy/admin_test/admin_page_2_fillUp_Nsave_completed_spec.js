
describe('Test trying to fill up all required Admin Page Completed fields and save form', function() {
    
    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;


        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');


   it('should - fill up all fields and save Admin Completed activity when completed', function(){

    
            
        //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var admin = addActivity_page.addActivityAdmin();
        
        // admin.clickSaveBtn();
        admin.clickCompleted();
        admin.fillUpFields();

        expect(admin.getAllertStatus()).toEqual("");
        expect(admin.getAllertStartTime()).toEqual("");
        expect(admin.getAllertEndTime()).toEqual("");
        expect(admin.getAllertNotes()).toEqual("");
      
         
        admin.clickSaveBtn();
        browser.waitForAngular();
        browser.driver.sleep(100);
        expect(admin.getTextAccepted()).toEqual("Success");
        admin.clickClose();
        browser.driver.sleep(500);
       
    });
    
});