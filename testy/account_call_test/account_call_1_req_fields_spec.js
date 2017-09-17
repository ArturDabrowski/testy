describe('Test show that all require notes are displaying properly', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;



    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });




    it('should - check that everywhere in Account Call are require notes [where needed]', function () {
       
        expect(login_page.allertLogin()).toEqual("");

        home_page = login_page.loginGood(params.login.user, params.login.password);
        isAngularSite(true);
       
        var addActivity_page = home_page.addActivity();
        var account_call = addActivity_page.addActivityAC();
        


        account_call.clickSaveBtn();

        expect(account_call.getAllertStatus()).toEqual("*Status is required.");
        expect(account_call.getAllertAccount()).toEqual("*Account Name is required.");
        expect(account_call.getAllertStartTime()).toEqual("*Start Time is required.");
        expect(account_call.getAllertEndTime()).toEqual("*End Time is required.");
        expect(account_call.getAllertObjective()).toEqual("*Objective is required.");
        expect(account_call.getAllertWorkWith()).toEqual("*Field is required.");

        account_call.clickCompleted();

        expect(account_call.getAllertNotes()).toEqual("*Notes field is required.");

        account_call.clickSaveBtn();


       


    });
});
