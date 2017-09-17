describe('Test show that all require alerts in Meeting are displaying properly', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;


        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');

    it('should - check that everywhere in Meeting Page are require notes [where needed]', function () {
       
        expect(login_page.allertLogin()).toEqual("");

        home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var meeting = addActivity_page.addActivityMeeting();
        
        meeting.clickSaveBtn();

        expect(meeting.getAllertStatus()).toEqual("*Status is required.");
        expect(meeting.getAllertStartTime()).toEqual("*Start Time is required.");
        expect(meeting.getAllertEndTime()).toEqual("*End Time is required.");
        expect(meeting.getAllertLocation()).toEqual("*Location is required.");
        expect(meeting.getAllertParticipation()).toEqual("*Field is required.");
        expect(meeting.getAllertObjective()).toEqual("*Objective is required.");

        meeting.clickCanceled();
        meeting.clickLocationAccount();

        expect(meeting.getAllertCancel()).toEqual("*Cancelled Reason is required.");
        expect(meeting.getAllertAccount()).toEqual("*Account Name is required.");

        meeting.clickCompleted();
        expect(meeting.getAllertNotes()).toEqual("*Notes field is required.");


        meeting.clickLocationOther();

        expect(meeting.getAllertLocationOther()).toEqual("*Other Location is required.");

        meeting.clickParticipants();
        expect(meeting.getAllertDBC()).toEqual("*Name is required.");
        expect(meeting.getAllertDistributor()).toEqual("*Name is required.");
        expect(meeting.getAllertInspira()).toEqual("*Name is required.");
        expect(meeting.getAllertGBA()).toEqual("*Name is required.");
        

    });
});
