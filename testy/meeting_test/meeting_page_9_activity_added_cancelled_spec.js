    
   
describe('Test that Meeting Canceled activity has been add to the calendar', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

        var params = browser.params;


    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });

it('should chcek that Meeting Canceled activity has been added', function(){

        
        //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
        var activity_page = home_page.activityGo();
      
        activity_page.findActivity('Meeting', 'Cancelled');
        var oneElement = element.all(by.repeater('row in $data')).count().then(function(count){
            expect(count == 2).toBeTruthy();
        });
        var meeting = activity_page.meetingEditActivity();
        expect(element(by.model('objective')).getAttribute('value')).toEqual(meeting.getValidationOfTest());
        expect(element(by.name('participatingMeetingDBCName')).getAttribute('value')).toEqual(meeting.getDBCNameText());
        expect(element(by.name('participatingMeetingDistributorName')).getAttribute('value')).toEqual(meeting.getDistributorNameText());
        expect(element(by.name('participatingMeetingInspiraName')).getAttribute('value')).toEqual(meeting.getInspiraNameText());
        expect(element(by.name('participatingMeetingGuinnessBreweryAmbassadorName')).getAttribute('value')).toEqual(meeting.getGBANameText());
        expect(element(by.model('cancelledReason')).getAttribute('value')).toEqual(meeting.getCancelReason());

    });
});