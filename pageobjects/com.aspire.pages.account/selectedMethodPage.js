const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const PersonDetailsPage = require('./personDetailsPage');
const AbstractPage = require('../com.aspire.pages/abstractPage');
const Common = require('../com.aspire.utils/Common');

const URL_REGEX = pageDefination.SELECTED_METHOD.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.SELECTED_METHOD.PAGE_TITLE_REGEX;

const BTN_FAST_VERIFY_METHOD = '.q-pb-md button';
const BTN_MANUAL_METHOD = '.q-mt-lg button';

class SelectedMethodPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);        
    }

    clickFastVerification() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_FAST_VERIFY_METHOD);
        //return this;
    }

    clickManualVerification() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_MANUAL_METHOD);
        return PersonDetailsPage;
    }
    
}

module.exports = new SelectedMethodPage();