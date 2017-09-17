var quality_page = function () {


    var saveBtn = element(by.css('[ng-click="saveForm(addActivityForm)"]'));
    var allertAccount = element(by.css('[ng-show="addActivityForm.accountname.$error.required && updateAccountSelected"]'));
    var allertStartTime = element(by.css('[ng-show="addActivityForm.timeStart.$error.required || valdiateStartTime"]'));
    var allertEndTime = element(by.css('[ng-show="addActivityForm.timeEnd.$error.required || valdiateEndTime"]'));
    var allertStatus = element(by.css('[ng-show="addActivityForm.selectedStatus.$error.required || validateStatus"]'));
    var allertNotes = element(by.css('[ng-show="addActivityForm.notes.$error.required"]'));
    var allertType = element(by.css('[ng-show="addActivityForm.checkselectedstatus.$error.required || checkselectedstatus"]'));
    var allertCancel = element(by.css('[ng-show="addActivityForm.cancelledReason.$error.required"]'));
    var typeCheckbox = element(by.id('t-audit'));
    var validationOfTest = 'TEST TEST that provide that this is a test of quality page!!%$#';
    var cancelField = element(by.model('cancelledReason'));
    var cancelReason = 'TEST just because TEST';
    var completed = element(by.id('completed-st'));
    var scheduled = element(by.id('scheduled-st'));
    var canceled = element(by.id('canceled-st'));
    var account = element(by.css('[on-item-click="funcUpdateAccountSelected(data)"]'));
    var accountFirstValue = element.all(by.repeater("item in filteredModel")).first().all(by.tagName("span")).first();
    var chooseStartTime = element(by.model('$parent.timeStart'));
    var chooseEndTime = element(by.model('$parent.timeEnd'));
    var textAccepted = element(by.tagName('h4'));
    var notes = element(by.model('notes'));
    var close = element(by.buttonText('Close'));

    // var accountName = element(by.css('navbar-link ng-binding'));


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
    this.getAllertNotes = function () {
        return allertNotes.getText();
    };
    this.getAllertType = function () {
        return allertType.getText();
    };
    this.getAllertCancel = function () {
        return allertCancel.getText();
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
    this.clickType = function(){
        browser.executeScript("arguments[0].click();", typeCheckbox.getWebElement());
    };
    this.clickClose = function () {
        close.click();
    };


    this.fillUpFields = function () {

        browser.executeScript("arguments[0].click();", account.getWebElement());
        browser.executeScript("arguments[0].click();", accountFirstValue.getWebElement());
        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        notes.sendKeys(validationOfTest);

    };
    this.fillUpFieldsCanceled = function () {

        cancelField.sendKeys(cancelReason);
        browser.executeScript("arguments[0].click();", account.getWebElement());
        browser.executeScript("arguments[0].click();", accountFirstValue.getWebElement());
        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        notes.sendKeys(validationOfTest);

    };


};
module.exports = new quality_page();
