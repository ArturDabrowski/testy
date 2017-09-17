var admin_page = function () {

    var saveBtn = element(by.css('[ng-click="saveForm(addActivityForm)"]'));
    var allertStartTime = element(by.css('[ng-show="addActivityForm.timeStart.$error.required || valdiateStartTime"]'));
    var allertEndTime = element(by.css('[ng-show="addActivityForm.timeEnd.$error.required || valdiateEndTime"]'));
    var allertStatus = element(by.css('[ng-show="addActivityForm.selectedStatus.$error.required || validateStatus"]'));
    var allertNotes = element(by.css('[ng-show="addActivityForm.notes.$error.required"]'));
    var validationOfTest = 'TEST TEST that provide that this is a test of admin!!%$#';
    var completed = element(by.id('completed-st'));
    var scheduled = element(by.id('scheduled-st'));
    var chooseStartTime = element(by.model('$parent.timeStart'));
    var chooseEndTime = element(by.model('$parent.timeEnd'));
    var textAccepted = element(by.tagName('h4'));
    var notes = element(by.model('notes'));
    var close = element(by.buttonText('Close'));


    this.getAllertStartTime = function () {
        return allertStartTime.getText();
    };
    this.getAllertEndTime = function () {
        return allertEndTime.getText();
    };
    this.getAllertStatus = function () {
        return allertStatus.getText();
    };
    this.getAllertNotes = function () {
        return allertNotes.getText();
    };
    this.getValidationOfTest = function () {
        return validationOfTest;
    };
    this.getTextAccepted = function () {
        return textAccepted.getText();
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
    this.clickClose = function () {
        close.click();
    };

    this.fillUpFields = function () {

        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        notes.sendKeys(validationOfTest);

    };

};
module.exports = new admin_page();
