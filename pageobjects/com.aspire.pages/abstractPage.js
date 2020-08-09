var chai = require('chai');
expect = chai.expect;

const TIMEOUT = 60000;

class AbstractPage {

    constructor(urlRegex, pageTitleRegex) {
        this.urlRegex = urlRegex;
        this.pageTitleRegex = pageTitleRegex;
        this.waitForPageLoad(this.urlRegex, this.pageTitleRegex);
    }

    waitForPageLoad(urlRegex, pageTitleRegex) {
        browser.waitUntil(
            () => expect(browser).toHaveUrlContaining(urlRegex),
            TIMEOUT,
            `Unmatching url after navigation, current url : ${browser.getUrl()} , expecting : ${urlRegex}`,
        );
        browser.waitUntil(
            () => browser.getTitle().match(pageTitleRegex),
            TIMEOUT,
            `Unmatching url after navigation, current url : ${browser.getTitle()} , expecting : ${pageTitleRegex}`,
        );
    }
}
module.exports = AbstractPage;