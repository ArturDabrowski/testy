  

describe('Delete Activity Scheduled', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
    isAngularSite(false);
    browser.get('https://dbcseals.com');
  });



it('should delete activity that Account Call has been add previously', function(){
       //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);      
        var oneElement = element.all(by.repeater('row in $data')).then(function($data){
        expect( oneElement.length != 1 ).toBeTruthy();
        var activity_page = home_page.activityGo();
        activity_page.findActivityScheduled();
          
        activity_page.deleteActivity();
       
            
            home_page.logOut();
       });
        
       });






});