    
   
describe('Test that activity has been add to the calendar Completed', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
      isAngularSite(false);
    browser.get('https://dbcseals.com/#!/');
  });






    it('should chcek that activity Account Call has been add', function(){

        
       // home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
        var activity_page = home_page.activityGo();
      
        activity_page.findActivityCompleted();
        var oneElement = element.all(by.repeater('row in $data')).then(function($data){
        expect( oneElement.length != 1 ).toBeTruthy();
        var account_call = activity_page.editActivity();
        expect(element(by.model('objective')).getAttribute('value')).toEqual(account_call.getValidationOfTest());
        
           
      
               
        

        });
    });
});