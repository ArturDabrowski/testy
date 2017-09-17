  describe('Delete Meeting Canceled Activity ', function () {

    var login_page = requirePAGES('login_page');
    var home_page = requirePAGES('home_page');

        var params = browser.params;


    beforeEach(function () {
        isAngularSite(false);
        browser.get('https://dbcseals.com/#!/');
    });

it('should delete Meeting Canceled activities that has been add previously', function () {
          
          //home_page = login_page.loginGood(params.login.user, params.login.password);
          isAngularSite(true);
          
              var activity_page = home_page.activityGo();
              activity_page.findActivity('Meeting', 'Cancelled');
              activity_page.deleteActivity();
              activity_page.deleteActivity();

      });

  });
