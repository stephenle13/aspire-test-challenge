const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const AbstractPage = require('../com.aspire.pages/abstractPage');
const Common = require('../com.aspire.utils/Common');
const optPage = require('./optPage');

const URL_REGEX = pageDefination.PERSON_DETAILS_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.PERSON_DETAILS_PAGE.PAGE_TITLE_REGEX;

const BTN_GET_STARTED = '.aspire-button=Get Started';
const BIRTHDAY_POPUP = "//div[contains(@placeholder, 'Set your date of birth')]//input";
const DROPDOWNLIST_NATIONAL = "//div[contains(@placeholder, 'Select any of the following')]//input";
const DROPDOWNLIST_GENDER = "//div[contains(@placeholder, 'Set your gender')]//input";
const DROPDOWNLIST_PURPOSE = "//div[contains(@placeholder, 'Select your purpose of using Aspire')]//input";
const BTN_SUBMIT = '.aspire-button=Submit';

class PersonDetailsPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    clickGetStarted() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_GET_STARTED);
        return this;
    }
    
    setBirthday(birthday) {

        WebElementHelper.click(BIRTHDAY_POPUP);
        var SELECT_DAY = `//div[contains(@class, 'q-date__calendar-item')]//span[contains(., '${birthday}')]`;
        WebElementHelper.click(SELECT_DAY);
        return this;
    }

    selectCountry(country) {
        var COUNTRY_LOCATOR = `//div[@class='q-item__label'][text()="${country}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DROPDOWNLIST_NATIONAL);
        WebElementHelper.click(COUNTRY_LOCATOR);
        return this;
    }

    selectGender(gender) {
        var GENDER_LOCATOR = `//div[@class='q-item__label'][text()="${gender}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DROPDOWNLIST_GENDER);
        WebElementHelper.click(GENDER_LOCATOR);
        return this;
    }

    selectPurpose(purpose) {
        var PURPOSE_LOCATOR = `//div[@class='q-item__label'][text()="${purpose}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DROPDOWNLIST_PURPOSE);
        WebElementHelper.click(PURPOSE_LOCATOR);
        return this;
    }

    setPersonalInfos(userData) {
        Common.waitForPageLoading();
        this.setBirthday(userData.birthday);
        this.selectCountry(userData.country);
        this.selectGender(userData.gender);
        this.selectPurpose(userData.purpose);
        return this;
    }

    clickSubmit() {
        WebElementHelper.click(BTN_SUBMIT);
        return optPage;
    }
}

module.exports = new PersonDetailsPage();