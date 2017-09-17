  describe('Delete Meeting Completed Activity ', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

    var params = browser.params;


        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');

      it('should delete Meeting Completed activities that has been add previously', function () {
          
          //home_page = login_page.loginGood(params.login.user, params.login.password);
          isAngularSite(true);
          
              var activity_page = home_page.activityGo();
              activity_page.findActivity('Meeting', 'Completed');
              activity_page.deleteActivity();
              activity_page.deleteActivity();

      });

  });
