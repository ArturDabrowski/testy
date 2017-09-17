let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
},
    
    suites: {
       login_test: 'testy/login_test/login_spec.js',
        
    ac_1_req_fields: 'testy/account_call_test/account_call_1_req_fields_spec.js',
                
    ac_2_fill_save_ompleted: 'testy/account_call_test/account_call_2_fillUp_Nsave_completed_spec.js',
        
    ac_3_check_activity_in_calendar_completed: 'testy/account_call_test/account_call_3_activity_added_completed_test_spec.js',
        
    ac_4_delete_activity_completed: 'testy/account_call_test/account_call_4_delete_activity_completed_spec.js',    
        
    ac_5_fillUp_save_scheduled: 'testy/account_call_test/account_call_5_fillUp_Nsave_scheduled_spec.js',    
        
    ac_6_check_activity_in_calendar_scheduled: 'testy/account_call_test/account_call_6_activity_added_scheduled_test_spec.js',
        
    ac_7_delete_activity_scheduled: 'testy/account_call_test/account_call_7_delete_activity_scheduled_spec.js',
        
    ac_all: [
        'testy/account_call_test/account_call_1_req_fields_spec.js',
        'testy/account_call_test/account_call_2_fillUp_Nsave_completed_spec.js',
        'testy/account_call_test/account_call_3_activity_added_completed_test_spec.js',
        'testy/account_call_test/account_call_4_delete_activity_completed_spec.js', 
        'testy/account_call_test/account_call_5_fillUp_Nsave_scheduled_spec.js', 
        'testy/account_call_test/account_call_6_activity_added_scheduled_test_spec.js',
        'testy/account_call_test/account_call_7_delete_activity_scheduled_spec.js',
        
    ],

    admin_1_req_fields: 'testy/admin_test/admin_page_1_req_fields_spec.js',

    admin_2_fill_save_ompleted: 'testy/admin_test/admin_page_2_fillUp_Nsave_completed_spec.js',

    admin_3_check_activity_in_calendar_completed: 'testy/admin_test/admin_page_3_activity_added_completed_test_spec.js',

    admin_4_delete_activity_completed: 'testy/admin_test/admin_page_4_delete_activity_completed_spec.js',    
        
    admin_5_fillUp_save_scheduled: 'testy/admin_test/admin_page_5_fillUp_Nsave_scheduled_spec.js',    
        
    admin_6_check_activity_in_calendar_scheduled: 'testy/admin_test/admin_page_6_activity_added_scheduled_test_spec.js',
    
    admin_7_delete_activity_scheduled: 'testy/admin_test/admin_page_7_delete_activity_scheduled_spec.js',

    admin_all: [
        'testy/admin_test/admin_page_1_req_fields_spec.js',
        'testy/admin_test/admin_page_2_fillUp_Nsave_completed_spec.js',
        'testy/admin_test/admin_page_3_activity_added_completed_test_spec.js',
        'testy/admin_test/admin_page_4_delete_activity_completed_spec.js', 
        'testy/admin_test/admin_page_5_fillUp_Nsave_scheduled_spec.js', 
        'testy/admin_test/admin_page_6_activity_added_scheduled_test_spec.js',
        'testy/admin_test/admin_page_7_delete_activity_scheduled_spec.js',
        
    ],

    quality_1_req_fields: 'testy/quality_test/quality_page_1_req_fields_spec.js',

    quality_2_fill_save_ompleted: 'testy/quality_test/quality_page_2_fillUp_Nsave_completed_spec.js',

    quality_3_check_activity_in_calendar_completed: 'testy/quality_test/quality_page_3_activity_added_completed_test_spec.js',

    quality_4_delete_activity_completed: 'testy/quality_test/quality_page_4_delete_activity_completed_spec.js',    
        
    quality_5_fillUp_save_scheduled: 'testy/quality_test/quality_page_5_fillUp_Nsave_scheduled_spec.js',    
        
    quality_6_check_activity_in_calendar_scheduled: 'testy/quality_test/quality_page_6_activity_added_scheduled_test_spec.js',
    
    quality_7_delete_activity_scheduled: 'testy/quality_test/quality_page_7_delete_activity_scheduled_spec.js',

    quality_8_fillUp_save_canceled: 'testy/quality_test/quality_page_8_fillUp_Nsave_cancelled_spec.js',

    quality_9_check_activity_in_calendar_canceled: 'testy/quality_test/quality_page_9_activity_added_cancelled_spec.js',
    
    quality_10_delete_activity_canceled: 'testy/quality_test/quality_page_10_delete_activity_cancelled_spec.js',

    quality_all: [
        'testy/quality_test/quality_page_1_req_fields_spec.js',
        'testy/quality_test/quality_page_2_fillUp_Nsave_completed_spec.js',
        'testy/quality_test/quality_page_3_activity_added_completed_test_spec.js',
        'testy/quality_test/quality_page_4_delete_activity_completed_spec.js', 
        'testy/quality_test/quality_page_5_fillUp_Nsave_scheduled_spec.js', 
        'testy/quality_test/quality_page_6_activity_added_scheduled_test_spec.js',
        'testy/quality_test/quality_page_7_delete_activity_scheduled_spec.js',
        'testy/quality_test/quality_page_8_fillUp_Nsave_cancelled_spec.js',
        'testy/quality_test/quality_page_9_activity_added_cancelled_spec.js',
        'testy/quality_test/quality_page_10_delete_activity_cancelled_spec.js',
        
    ],

    meeting_1_req_fields: 'testy/meeting_test/meeting_page_1_req_fields_spec.js',

    meeting_2_fill_save_ompleted: 'testy/meeting_test/meeting_page_2_fillUp_Nsave_completed_spec.js',

    meeting_3_check_activity_in_calendar_completed: 'testy/meeting_test/meeting_page_3_activity_added_completed_test_spec.js',

    meeting_4_delete_activity_completed: 'testy/meeting_test/meeting_page_4_delete_activity_completed_spec.js',    
        
    meeting_5_fillUp_save_scheduled: 'testy/meeting_test/meeting_page_5_fillUp_Nsave_scheduled_spec.js',    
        
    meeting_6_check_activity_in_calendar_scheduled: 'testy/meeting_test/meeting_page_6_activity_added_scheduled_test_spec.js',
    
    meeting_7_delete_activity_scheduled: 'testy/meeting_test/meeting_page_7_delete_activity_scheduled_spec.js',

    meeting_8_fillUp_save_canceled: 'testy/meeting_test/meeting_page_8_fillUp_Nsave_cancelled_spec.js',

    meeting_9_check_activity_in_calendar_canceled: 'testy/meeting_test/meeting_page_9_activity_added_cancelled_spec.js',
    
    meeting_10_delete_activity_canceled: 'testy/meeting_test/meeting_page_10_delete_activity_cancelled_spec.js',

    meeting_all: [
        'testy/meeting_test/meeting_page_1_req_fields_spec.js',
        'testy/meeting_test/meeting_page_2_fillUp_Nsave_completed_spec.js',
        'testy/meeting_test/meeting_page_3_activity_added_completed_test_spec.js',
        'testy/meeting_test/meeting_page_4_delete_activity_completed_spec.js', 
        'testy/meeting_test/meeting_page_5_fillUp_Nsave_scheduled_spec.js', 
        'testy/meeting_test/meeting_page_6_activity_added_scheduled_test_spec.js',
        'testy/meeting_test/meeting_page_7_delete_activity_scheduled_spec.js',
        'testy/meeting_test/meeting_page_8_fillUp_Nsave_cancelled_spec.js',
        'testy/meeting_test/meeting_page_9_activity_added_cancelled_spec.js',
        'testy/meeting_test/meeting_page_10_delete_activity_cancelled_spec.js',
        
    ]


 
  },
    
    
    
   // specs: ['specs/requireFieldsAC.js'],



    onPrepare: function () {

        browser.driver.manage().window().setSize(1280, 1024);
        
        global.EC = protractor.ExpectedConditions;

        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;

        };


        global.requirePAGES = function (relativePath) {
            return require(__dirname + '/pages/' + relativePath + '.js');
        };

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },


    params: {
        login:{
            user:'test',
            password:'test00'
        }},
    
     jasmineNodeOpts: {
    showColors: true, 
  }


}
