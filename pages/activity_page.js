requirePAGES ('account_call');
requirePAGES ('admin_page');
requirePAGES ('meeting_page');

var activity_page = function(){
    var date = element(by.name('date'));
    var account = element(by.name('accountName'));
    var type = element(by.name('activityTypeName'));
    var status = element(by.name('status'));
    var edit = element(by.css('[ng-click="viewActivity(row.activitiesId, \'edit\')"]'));
    var deleteActiv = element(by.css('[ng-click="viewActivity(row.activitiesId, \'remove\')"]'));
    var goBack = element(by.css('[ng-click="goback()"]'));
    var editSaveActivity = element(by.css('[ng-click="saveForm(addActivityForm)"]'));
    var deleteSavedActivity = element(by.css('[ng-click="showModal()"]'));
    var deleteSavedActivityConfirm = element(by.css('[ng-click="remove()"]'));


    this.findActivity = function(data, data2){
        
        var d = new Date();
        
         var day = d.getDate();
        if (day < 10) {
            day = '0'+day;
        }

        date.clear();
        type.clear();
        status.clear();
        date.sendKeys( (d.getMonth()+1)+"/" +day + "/" +(d.getYear()-100));
        type.sendKeys(data);
        status.sendKeys(data2);

    };

    this.editActivity = function(){
        edit.click();
        return requirePAGES('account_call');
    };

    this.adminEditActivity = function(){
        edit.click();
        return requirePAGES('admin_page');
    };
    this.qualityEditActivity = function(){
        edit.click();
        return requirePAGES('quality_page');
    };
    this.meetingEditActivity = function(){
        edit.click();
        return requirePAGES('meeting_page');
    };
     this.editSaveActivity = function(){
        editSaveActivity.click();
     };
     this.goBack = function(){
        goBack.click();
     };

    this.deleteActivity = function(){
        deleteActiv.click();
        deleteSavedActivity.click();
        browser.waitForAngular();
        browser.driver.sleep(500);
        deleteSavedActivityConfirm.click();

    };

};
module.exports = new activity_page();
