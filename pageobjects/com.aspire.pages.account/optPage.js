const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const Common = require('../com.aspire.utils/Common');
const pageDefination = require('../../core/pageDefination');
const AbstractPage = require('../com.aspire.pages/abstractPage');
const IncorporatedSelector = require('./incorporatedSelectorPage');

const URL_REGEX = pageDefination.OTP_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.OTP_PAGE.PAGE_TITLE_REGEX;
const INPUT_OTP_CODE = 'input[data-cy="digit-input-pin"]';
const BTN_OTP_VERIFY = 'button[data-cy="verify-otp-submit"]';
const BTN_CONTINUE = '.aspire-button=Continue';
const VERIFY_STATUS = 'div.q-mb-md';

class OtpPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }
    
    /**
     * @param {Int} otp //otp generate
     */
    verifyOTPCode(otp) {
        Common.waitForPageLoading();
        WebElementHelper.setValue(INPUT_OTP_CODE, otp);
        WebElementHelper.click(BTN_OTP_VERIFY);
        return this;
    }

    /**
     * @param {string} message // message to verify
     */
    checkSuccessfullyVerified(message) {
        WebElementHelper.waitForElementDisplayed(VERIFY_STATUS);
        WebElementHelper.verifyText(
            VERIFY_STATUS,
            message,
        );
        return this;
    }

    /**
     * @param {any} data
     * @param {any} message 
     */
    verifyOtpCodeAndCheck(data, message) {
        this.verifyOTPCode(data.optCode);
        this.checkSuccessfullyVerified(message);
    }

    clickContinueToSelectedMethod() {
        WebElementHelper.click(BTN_CONTINUE);
        return IncorporatedSelector;
    }

    clickContinueToBusinessDetails() {
        WebElementHelper.click(BTN_CONTINUE);
        return IncorporatedSelector;
    }
}

module.exports = new OtpPage();