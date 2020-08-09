const WebElementHelper = require('../com.aspire.utils/WebElementHelper');
const BrowserHandler = require('../com.aspire.utils/BrowserHandler');
const pageDefination = require('../../core/pageDefination');
const RegisterPage = require('./registerPage');
const AbstractPage = require('../com.aspire.pages/abstractPage');

const URL_REGEX = pageDefination.HOMEPAGE.URL_REGEX;
const PAGE_TITLE_REGEX = pageDefination.HOMEPAGE.PAGE_TITLE_REGEX;
const register_link = ".login__register-link";

class Homepage extends AbstractPage {

    constructor() {
        super(URL_REGEX, PAGE_TITLE_REGEX);
    }

    open() {
        BrowserHandler.initBrowser();
        BrowserHandler.navigate(pageDefination.PATH.URL);
        return this;
    }

    register() {
        WebElementHelper.click(register_link);
        return RegisterPage;
    }
}

module.exports = new Homepage();