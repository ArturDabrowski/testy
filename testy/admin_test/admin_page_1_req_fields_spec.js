describe('Test show that all require alerts in Admin are displaying properly', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;

    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });

    it('should - check that everywhere in Admin page are require notes [where needed]', function () {

        expect(login_page.allertLogin()).toEqual("");

        home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var admin = addActivity_page.addActivityAdmin();

        admin.clickSaveBtn();

        expect(admin.getAllertStatus()).toEqual("*Status is required.");
        expect(admin.getAllertStartTime()).toEqual("*Start Time is required.");
        expect(admin.getAllertEndTime()).toEqual("*End Time is required.");
        expect(admin.getAllertNotes()).toEqual("*Notes field is required.");

    });
});
