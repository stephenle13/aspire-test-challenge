const AbstractPage = require('../com.aspire.pages/abstractPage');
const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const Common = require('../com.aspire.utils/Common');
const path = require('path');

const URL_REGEX = pageDefination.PERSON_DETAILS_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.PERSON_DETAILS_PAGE.PAGE_TITLE_REGEX;

const BTN_CONTINUE = '.aspire-button';
const BTN_SUBMIT = '.onfido-sdk-ui-Button-button-primary';
const BTN_VERIFICATION = '.aspire-button=Begin Verification';
const BTN_IDENTITY_CARD = "//button//div[contains(@class,'onfido-sdk-ui-DocumentSelector-icon-national-identity-card')]";
const CARD_INDEX = '.onfido-sdk-ui-Uploader-iconContainer';
const BTN_TAKE_SELFIE = '.onfido-sdk-ui-Camera-btn';
const INPUT_IDNUMBER = 'input[data-cy="identity-edit-nric"]';

const filePath = path.join(__dirname, '../../resources/identityCardTest.jpg');
const fileUpload = '.onfido-sdk-ui-CustomFileInput-input';

class IdentifyVerification extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    clickContinue() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_CONTINUE);
        return this;
    }

    clickBeginVerification() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_VERIFICATION);
        return this;
    }

    verifyByIdentityCard() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_IDENTITY_CARD);
        $(fileUpload).addValue(filePath);
        WebElementHelper.click(BTN_SUBMIT);
        WebElementHelper.waitForElementDisplayed(CARD_INDEX);
        $(fileUpload).addValue(filePath);
        WebElementHelper.click(BTN_SUBMIT);
        return this;
    }

    takeASelfie() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_SUBMIT);
        browser.pause(5000);
        $(BTN_TAKE_SELFIE).click();
        WebElementHelper.click(BTN_SUBMIT);        
        return this;
    }

    setIdNumber(data) {
        WebElementHelper.setValue(INPUT_IDNUMBER, data);
        WebElementHelper.click(BTN_CONTINUE);
        return this;
    }

    completeVerification(data) {
        this.clickBeginVerification();
        this.verifyByIdentityCard();
        this.takeASelfie();
        this.setIdNumber(data.idNo);
    }
}

module.exports = new IdentifyVerification();