const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const AbstractPage = require('../com.aspire.pages/abstractPage');
const Common = require('../com.aspire.utils/Common');
const OtpPage = require('../com.aspire.pages.account/optPage');

const URL_REGEX = pageDefination.BUSINESS_DETAILS_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.BUSINESS_DETAILS_PAGE.PAGE_TITLE_REGEX;

const BTN_CONTINUE = '.aspire-button=Continue';
const INPUT_BUSINESS_NAME = "//div[contains(@placeholder, 'The full legal business name')]//input";
const DDL_REGIS_TYPE = "//div[contains(@data-cy, 'register-business-registration-type')]//input";
const INPUT_BUSINESS_UEN = "//div[contains(@placeholder, 'Business Registration Number UEN')]//input";
const DDL_REGIS_ROLE = "//div[contains(@data-cy, 'register-business-registration-role')]//input";
const DDL_REGIS_INDUSTRY = "//div[contains(@data-cy, 'register-business-industry')]//input";
const DDL_REGIS_SUBINDUSTRY = "//div[contains(@data-cy, 'register-business-sub-industry')]//input";
const BTN_SUBMIT = '.aspire-button=Submit';

class BusinessDetailsPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    clickContinue() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_CONTINUE);
        return this;
    }
    
    setBusinessName(businessName) {
        Common.waitForPageLoading();
        WebElementHelper.setValue(INPUT_BUSINESS_NAME, businessName);
        return this;
    }

    selectRegistrationType(type) {
        var REGIS_TYPE_LOCATOR = `//div[@class='q-item__label'][text()="${type}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DDL_REGIS_TYPE);
        WebElementHelper.click(REGIS_TYPE_LOCATOR);
        return this;
    }

    selectRegistrationRole(role) {
        var REGIS_ROLE_LOCATOR = `//div[@class='q-item__label'][text()="${role}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DDL_REGIS_ROLE);
        WebElementHelper.click(REGIS_ROLE_LOCATOR);
        return this;
    }

    setBusinessRegisUEN(uen) {
        Common.waitForPageLoading();
        WebElementHelper.setValue(INPUT_BUSINESS_UEN, uen);
        return this;
    }

    selectIndustry(industry) {
        var REGIS_INDUSTRY_LOCATOR = `//div[@class='q-item__label'][text()="${industry}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DDL_REGIS_INDUSTRY);
        WebElementHelper.click(REGIS_INDUSTRY_LOCATOR);
        return this;
    }

    selectSubIndustry(subIndustry) {
        var REGIS_INDUSTRY_LOCATOR = `//div[@class='q-item__label'][text()="${subIndustry}"]`;
        Common.waitForPageLoading();
        WebElementHelper.click(DDL_REGIS_SUBINDUSTRY);
        WebElementHelper.click(REGIS_INDUSTRY_LOCATOR);
        return this;
    }

    setBusinessInfos(data) {
        Common.waitForPageLoading();
        this.setBusinessName(data.businessName);
        this.selectRegistrationType(data.regisType);
        this.setBusinessRegisUEN(data.uen);
        this.selectRegistrationRole(data.role);
        this.selectIndustry(data.industry);
        this.selectSubIndustry(data.subIndustry);
        return this;
    }

    clickSubmit() {
        WebElementHelper.click(BTN_SUBMIT);
        return OtpPage;
    }
}

module.exports = new BusinessDetailsPage();