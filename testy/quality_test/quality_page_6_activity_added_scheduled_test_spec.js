    
   
describe('Test that Quality Scheduled activity has been add to the calendar ', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



  beforeEach(function() {
      isAngularSite(false);
    browser.get('https://dbcseals.com/#!/');
  });

    it('should chcek that Quality Scheduled activity has been added', function(){

        
        //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
        var activity_page = home_page.activityGo();
      
        activity_page.qualityFindActivityScheduled();
        var oneElement = element.all(by.repeater('row in $data')).then(function($data){
        expect( oneElement.length != 1 ).toBeTruthy();
        var quality = activity_page.qualityEditActivity();
        expect(element(by.model('notes')).getAttribute('value')).toEqual(quality.getValidationOfTest());

        });
    });
});