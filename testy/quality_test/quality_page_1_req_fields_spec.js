describe('Test show that all require alerts in Quality are displaying properly', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });




    it('should - check that everywhere in Quality Page are require notes [where needed]', function () {
       
        expect(login_page.allertLogin()).toEqual("");

        home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var quality = addActivity_page.addActivityQuality();
        
        quality.clickSaveBtn();

        expect(quality.getAllertStatus()).toEqual("*Status is required.");
        expect(quality.getAllertAccount()).toEqual("*Account Name is required.");
        expect(quality.getAllertType()).toEqual("*Quality type is required.");
        expect(quality.getAllertStartTime()).toEqual("*Start Time is required.");
        expect(quality.getAllertEndTime()).toEqual("*End Time is required.");
        expect(quality.getAllertNotes()).toEqual("*Notes field is required.");

        quality.clickCanceled();

        expect(quality.getAllertCancel()).toEqual("*Cancelled Reason is required.");


    });
});
