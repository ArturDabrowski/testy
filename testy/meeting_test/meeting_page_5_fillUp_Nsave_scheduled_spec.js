
describe('Test trying to fill up all Meeting Page Scheduled required fields and save form', function() {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

        var params = browser.params;


    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });

    it('should - fill up all fields with Location Account and save Meeting Scheduled activity', function(){

    
            
        //home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var meeting = addActivity_page.addActivityMeeting();
        
        meeting.clickSaveBtn();
        meeting.clickScheduled();
        meeting.fillUpFields();
        meeting.fillUpLocationAccount();

        expect(meeting.getAllertStatus()).toEqual("");
        expect(meeting.getAllertStartTime()).toEqual("");
        expect(meeting.getAllertEndTime()).toEqual("");
        expect(meeting.getAllertLocation()).toEqual("");
        expect(meeting.getAllertParticipation()).toEqual("");
        expect(meeting.getAllertObjective()).toEqual("");
        expect(meeting.getAllertCancel()).toEqual("");
        expect(meeting.getAllertAccount()).toEqual("");
        expect(meeting.getAllertLocationOther()).toEqual("");
        expect(meeting.getAllertDBC()).toEqual("");
        expect(meeting.getAllertDistributor()).toEqual("");
        expect(meeting.getAllertInspira()).toEqual("");
        expect(meeting.getAllertGBA()).toEqual("");

        meeting.clickSaveBtn();
        browser.waitForAngular();
        browser.driver.sleep(100);
        expect(meeting.getTextAccepted()).toEqual("Success");
        meeting.clickClose();
        browser.driver.sleep(500);
       

    });

    it('should - fill up all fields with Location Other and save Meeting Scheduled activity', function(){

    
        var addActivity_page = home_page.addActivity();
        var meeting = addActivity_page.addActivityMeeting();
        
        meeting.clickSaveBtn();
        meeting.clickScheduled();
        meeting.fillUpFields();
        meeting.fillUpLocationOther();


        expect(meeting.getAllertStatus()).toEqual("");
        expect(meeting.getAllertStartTime()).toEqual("");
        expect(meeting.getAllertEndTime()).toEqual("");
        expect(meeting.getAllertLocation()).toEqual("");
        expect(meeting.getAllertParticipation()).toEqual("");
        expect(meeting.getAllertObjective()).toEqual("");
        expect(meeting.getAllertCancel()).toEqual("");
        expect(meeting.getAllertAccount()).toEqual("");
        expect(meeting.getAllertLocationOther()).toEqual("");
        expect(meeting.getAllertDBC()).toEqual("");
        expect(meeting.getAllertDistributor()).toEqual("");
        expect(meeting.getAllertInspira()).toEqual("");


        meeting.clickSaveBtn();
        browser.waitForAngular();
        browser.driver.sleep(500);
        expect(meeting.getTextAccepted()).toEqual("Success");
        meeting.clickClose();
        browser.driver.sleep(500);
       

    });
    
});