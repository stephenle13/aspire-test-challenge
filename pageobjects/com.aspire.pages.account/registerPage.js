const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const Common = require('../com.aspire.utils/Common');
const AbstractPage = require('../com.aspire.pages/abstractPage');

const OtpPage = require('./optPage');

const URL_REGEX = pageDefination.REGISTER_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.REGISTER_PAGE.PAGE_TITLE_REGEX;

const INPUT_NAME = 'input[name="full_name"]';
const INPUT_EMAIL = 'input[name="email"]';
const INPUT_PHONE_NUMBER = 'input[name="phone"]';
const DROPDOWNLIST_HEARD_ABOUT = 'div[data-cy="register-person-heard-about"]';
const BTN_CONTINUE = '.aspire-button=Continue';
const COMBOBOX_USER_AGREEMENT = 'div[data-cy="register-person-privacy"]';

class RegisterPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    /**
     * @param {String} name // personal name of user
     */
    setName(name) {
        WebElementHelper.inputValue(INPUT_NAME, name);
        return this;
    }

    /**
     * @param {String} ermail // personal email of user
     */
    setEmail(email) {
        WebElementHelper.inputValue(INPUT_EMAIL, email);
        return this;
    }

    /**
     * @param {Number} phoneNumber // phone number 912466751
     */
    setPhoneNumber(phoneNumber) {
        //select country then entering a mobile phone number.
        WebElementHelper.inputValue(INPUT_PHONE_NUMBER, phoneNumber);
        return this;
    }

    /**
     * @param {String} option // country
     */
    selectWhereHeardAboutUs(option) {
        const ITEM_HEARD_ABOUT = `//div[@class='q-item__label'][text()="${option}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DROPDOWNLIST_HEARD_ABOUT);
        WebElementHelper.click(ITEM_HEARD_ABOUT);
        return this;
    }

    checkOnUserAgreement() {
        WebElementHelper.click(COMBOBOX_USER_AGREEMENT);
        return this;
    }

    clickContinue() {
        WebElementHelper.click(BTN_CONTINUE);
        return OtpPage;
    }

    inputAccountInfo(userData) {
        this.setName(userData.name);
        this.setEmail(userData.email);
        this.setPhoneNumber(userData.phoneNumber);
        this.selectWhereHeardAboutUs(userData.whereYouHeardAboutUs);
        this.checkOnUserAgreement();                        
    }
}

module.exports = new RegisterPage();