
describe('Test trying to fill up all required Quality Scheduled fields and save form', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
      isAngularSite(false);
    browser.get('https://dbcseals.com/#!/');
  });


   it('should - fill up all fields and save Quality Scheduled activity', function(){

    
            
        //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var quality = addActivity_page.addActivityQuality();
        
        quality.clickSaveBtn();
        quality.clickScheduled();
        quality.clickType();
        quality.fillUpFields();
            
        expect(quality.getAllertStatus()).toEqual("");
        expect(quality.getAllertAccount()).toEqual("");
        expect(quality.getAllertType()).toEqual("");
        expect(quality.getAllertStartTime()).toEqual("");
        expect(quality.getAllertEndTime()).toEqual("");
        expect(quality.getAllertNotes()).toEqual("");
      
         
        quality.clickSaveBtn();
        browser.waitForAngular();
        browser.driver.sleep(100);
        expect(quality.getTextAccepted()).toEqual("Success");
        quality.clickClose();

    });
    
});