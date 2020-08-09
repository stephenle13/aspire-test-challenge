const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const pageDefination = require('../../core/pageDefination');
const SelectedMethodPage = require('./selectedMethodPage');
const AbstractPage = require('../com.aspire.pages/abstractPage');
const Common = require('../com.aspire.utils/Common');

const URL_REGEX = pageDefination.INCORPORATED_SELECTOR_PAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.INCORPORATED_SELECTOR_PAGE.PAGE_TITLE_REGEX;

const BTN_ACRA_METHOD = '.q-pb-md button';
const BTN_MANUAL_METHOD = '.q-mt-lg button';

class IncorporatedSelectorPage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    clickRegisteredWithACRA() {
        Common.waitForPageLoading();
        WebElementHelper.click(BTN_ACRA_METHOD);        
        return SelectedMethodPage;
    }

    clickManualRegister() {
        WebElementHelper.click(BTN_MANUAL_METHOD);
        //return SelectedMethodPage;
    }
    
}

module.exports = new IncorporatedSelectorPage();