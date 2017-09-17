var meeting_page = function () {


    var saveBtn = element(by.css('[ng-click="saveForm(addActivityForm)"]'));
    var allertAccount = element(by.css('[ng-show="addActivityForm.accountname.$error.required && updateAccountSelected"]'));
    var allertStartTime = element(by.css('[ng-show="addActivityForm.timeStart.$error.required || valdiateStartTime"]'));
    var allertEndTime = element(by.css('[ng-show="addActivityForm.timeEnd.$error.required || valdiateEndTime"]'));
    var allertStatus = element(by.css('[ng-show="addActivityForm.selectedStatus.$error.required || validateStatus"]'));
    var allertCancel = element(by.css('[ng-show="addActivityForm.cancelledReason.$error.required"]'));
    var allertNotes = element(by.css('[ng-show="addActivityForm.notes.$error.required"]'));
    var allertObjective = element(by.css('[ng-show="addActivityForm.objective.$error.required"]'));
    var allertLocation = element(by.css('[ng-show="addActivityForm.meetingLocationSelected.$error.required"]'));
    var allertParticipation = element(by.css('[ng-show="whoisparticipating"]'));
    var allertLocationOther = element(by.css('[ng-show="$parent.addActivityForm.meetingLocationOtherText.$error.required"]'));
    var allertDBC = element(by.css('[ng-show="$parent.addActivityForm.participatingMeetingDBCName.$error.required"]'));
    var allertDistributor = element(by.css('[ng-show="$parent.addActivityForm.participatingMeetingDistributorName.$error.required"]'));
    var allertInspira = element(by.css('[ng-show="$parent.addActivityForm.participatingMeetingInspiraName.$error.required"]'));
    var allertGBA = element(by.css('[ng-show="$parent.addActivityForm.participatingMeetingGuinnessBreweryAmbassadorName.$error.required"]'));
    var validationOfTest = 'TEST TEST that provide that this is a test of meeting page!!%$#';
    var notesText = 'TEST some notes text TEST';
    var locationOtherText = 'TEST some location TEST';
    var locationOtherInput = element(by.model('$parent.meetingLocationOtherText'));
    var DBCName = element(by.model('$parent.participatingMeetingName.DBC'));
    var DistributorName = element(by.model('$parent.participatingMeetingName.Distributor'));
    var InspiraName = element(by.model('$parent.participatingMeetingName.Inspira'));
    var GBAName = element(by.model('$parent.participatingMeetingName.GuinnessBreweryAmbassador'));
    var DBCNameText = 'TEST DBC name TEST';
    var DistributorNameText = 'TEST DISTRIBUTOR NAME TEST';
    var InspiraNameText = 'TEST INSPIRA NAME TEST';
    var GBANameText = 'TEST GBA NAME TEST';
    var cancelField = element(by.model('cancelledReason'));
    var cancelReason = 'TEST just because TEST';
    var completed = element(by.id('completed-st'));
    var scheduled = element(by.id('scheduled-st'));
    var canceled = element(by.id('canceled-st'));
    var locationAccount = element(by.id('location-account'));
    var locationOther = element(by.id('location-other'));
    var participatingDBC = element(by.id('participating-dbc'));
    var participatingDistributor = element(by.id('participating-dist'));
    var participatingInspira = element(by.id('participating-ins'));
    var participatingGBA = element(by.id('participating-gba'));
    var account = element(by.css('[on-item-click="funcUpdateAccountSelected(data)"]'));
    var object = element(by.model('objective'));
    var accountFirstValue = element.all(by.repeater("item in filteredModel")).first().all(by.tagName("span")).first();
    var chooseStartTime = element(by.model('$parent.timeStart'));
    var chooseEndTime = element(by.model('$parent.timeEnd'));
    var textAccepted = element(by.tagName('h4'));
    var notes = element(by.model('notes'));
    var close = element(by.buttonText('Close'));
    var meeting = 'Meeting';

   
    this.getAllertAccount = function () {
        return allertAccount.getText();
    };
    this.getAllertStartTime = function () {
        return allertStartTime.getText();
    };
    this.getAllertEndTime = function () {
        return allertEndTime.getText();
    };
    this.getAllertStatus = function () {
        return allertStatus.getText();
    };
    this.getAllertCancel = function () {
        return allertCancel.getText();
    };
    this.getAllertLocation = function () {
        return allertLocation.getText();
    };
    this.getAllertLocationOther = function () {
        return allertLocationOther.getText();
    };
    this.getAllertParticipation = function () {
        return allertParticipation.getText();
    };
    this.getAllertObjective = function () {
        return allertObjective.getText();
    };
    this.getAllertNotes = function () {
        return allertNotes.getText();
    };
    this.getAllertDBC = function () {
        return allertDBC.getText();
    };
    this.getAllertDistributor = function () {
        return allertDistributor.getText();
    };
    this.getAllertInspira = function () {
        return allertInspira.getText();
    };
    this.getAllertGBA = function () {
        return allertGBA.getText();
    };
    this.getValidationOfTest = function () {
        return validationOfTest;
    };
    this.getCancelReason = function () {
        return cancelReason;
    };
    this.getAccountFirstValue = function () {
        return accountFirstValue.getText();
    };
    this.getAccount = function () {
        return account.getText();
    };
    this.getTextAccepted = function () {
        return textAccepted.getText();
    };
    this.getNotesText = function () {
        return notesText;
    };
    this.getDBCNameText = function () {
        return DBCNameText;
    };
    this.getDistributorNameText = function () {
        return DistributorNameText;
    };
    this.getInspiraNameText = function () {
        return InspiraNameText;
    };
    this.getGBANameText = function () {
        return GBANameText;
    };

    this.clickSaveBtn = function () {
        saveBtn.click();

    };

    this.clickCompleted = function () {
        browser.executeScript("arguments[0].click();", completed.getWebElement()); // checkbox fill-up completed

    };
    this.clickScheduled = function () {
        browser.executeScript("arguments[0].click();", scheduled.getWebElement()); // checkbox fill-up scheduled

    };
    this.clickCanceled = function () {
        browser.executeScript("arguments[0].click();", canceled.getWebElement()); // checkbox fill-up canceled

    };
    this.clickLocationAccount = function () {
        browser.executeScript("arguments[0].click();", locationAccount.getWebElement()); // checkbox fill-up canceled

    };
    this.clickLocationOther = function () {
        browser.executeScript("arguments[0].click();", locationOther.getWebElement()); // checkbox fill-up canceled

    };
    this.clickClose = function () {
        close.click();
    };

    this.clickParticipants = function(){
        browser.executeScript("arguments[0].click();", participatingDBC.getWebElement());
        browser.executeScript("arguments[0].click();", participatingDistributor.getWebElement());
        browser.executeScript("arguments[0].click();", participatingInspira.getWebElement());
        browser.executeScript("arguments[0].click();", participatingGBA.getWebElement());
    };


    this.fillUpFields = function () {

        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        this.clickParticipants();
        DBCName.sendKeys(DBCNameText);
        DistributorName.sendKeys(DistributorNameText);
        InspiraName.sendKeys(InspiraNameText);
        GBAName.sendKeys(GBANameText);
        object.sendKeys(validationOfTest);
    };
    this.fillUpLocationAccount = function(){
        browser.executeScript("arguments[0].click();", locationAccount.getWebElement());
        browser.executeScript("arguments[0].click();", account.getWebElement());
        browser.executeScript("arguments[0].click();", accountFirstValue.getWebElement());
    };
    this.fillUpLocationOther = function(){
        browser.executeScript("arguments[0].click();", locationOther.getWebElement());
        locationOtherInput.sendKeys(locationOtherText);
    };
    this.fillUpNotes = function(){
        notes.sendKeys(notesText);
    };
    this.fillUpCancelReason = function(){
        cancelField.sendKeys(cancelReason);
    };

};
module.exports = new meeting_page();
