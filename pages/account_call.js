var account_call = function () {


    var saveBtn = element(by.css('[ng-click="saveForm(addActivityForm)"]'));
    var allertAccount = element(by.css('[ng-show="noAccount.indexOf(activitySelected) === -1 && activitySelected !== \'pto\' && updateAccountSelected"]'));
    var allertStartTime = element(by.css('[ng-show="addActivityForm.timeStart.$error.required || valdiateStartTime"]'));
    var allertEndTime = element(by.css('[ng-show="addActivityForm.timeEnd.$error.required || valdiateEndTime"]'));
    var allertObjective = element(by.css('[ng-show="addActivityForm.objective.$error.required"]'));
    var allertWorkWith = element(by.css('[ng-show="addActivityForm.joingCallSelected.$error.required"]'));
    var allertStatus = element(by.css('[ng-show="addActivityForm.selectedStatus.$error.required || validateStatus"]'));
    var allertNotes = element(by.css('[ng-show="addActivityForm.notes.$error.required"]'));
    var validationOfTest = 'TEST TEST that provide that this is a test of account call!!%$#';
    var completed = element(by.id('completed-st'));
    var scheduled = element(by.id('scheduled-st'));
    var account = element(by.css('[on-item-click="funcUpdateAccountSelected(data)"]'));
    var accountFirstValue = element.all(by.repeater("item in filteredModel")).first().all(by.tagName("span")).first();
    var chooseStartTime = element(by.model('$parent.timeStart'));
    var chooseEndTime = element(by.model('$parent.timeEnd'));
    var object = element(by.model('objective'));
    var workWithNO = element(by.id('workWithNo'));
    var workWithYES = element(by.id('workWithYes'));
    var workWithDBC = element(by.id('workDBC'));
    var DBCName = element(by.name('joingCallOptionsDBCName'));
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
    this.getAllertObjective = function () {
        return allertObjective.getText();
    };
    this.getAllertWorkWith = function () {
        return allertWorkWith.getText();
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
    this.clickClose = function () {
        close.click();
    }

    this.fillUpFieldsScheduled = function () {

        account.click();
        accountFirstValue.click();
        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        object.sendKeys(validationOfTest);
        browser.executeScript("arguments[0].click();", workWithNO.getWebElement());
        // browser.executeScript("arguments[0].click();", workWithDBC.getWebElement());
        // DBCNAme.sendKeys('test');
        // notes.sendKeys('TEST');



    };
    this.fillUpFieldsCompleted = function () {

        account.click();
        accountFirstValue.click();
        chooseStartTime.click();
        chooseStartTime.$('[value="string:10:30AM"]').click();
        chooseEndTime.click();
        chooseEndTime.$('[value="string:11:30AM"]').click();
        object.sendKeys(validationOfTest);
        browser.executeScript("arguments[0].click();", workWithNO.getWebElement());

        //  browser.executeScript("arguments[0].click();", workWithDBC.getWebElement());
        //  DBCName.sendKeys('test');

        notes.sendKeys('TEST');



    };






};
module.exports = new account_call();
