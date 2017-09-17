requirePAGES ('addActivity_page');
var addActivity_page = function(){
    
    var selectActivity = element(by.model('activitySelected'));
    var AccountCall = selectActivity.$('[value="account_call"]'); // get value from dropdown
    var admin = selectActivity.$('[value="admin"]');
    var quality = selectActivity.$('[value="quality"]');
    var meeting = selectActivity.$('[value="meeting"]');
    
    
    this.addActivityAC = function(){
        
            selectActivity.click();
            AccountCall.click();
        return requirePAGES('account_call');
        
    };
    this.addActivityAdmin = function(){
        
            selectActivity.click();
            admin.click();
        return requirePAGES('admin_page');
        
    };
    this.addActivityQuality = function(){
        
            selectActivity.click();
            quality.click();
        return requirePAGES('quality_page');
        
    };

    this.addActivityMeeting = function(){
        
            selectActivity.click();
            meeting.click();
        return requirePAGES('meeting_page');
        
    };
  
};
module.exports = new addActivity_page();