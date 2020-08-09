const TIMEOUT = 60000;

class BrowserHandler {
    initBrowser() {
        browser.deleteCookies();
        browser.maximizeWindow();
    }

    navigate(url) {
        browser.url(url);
    }

    maximizeWindow() {
        browser.maximizeWindow();
    }

     /**
     * @param {string} urlRegex    url regex
     * @param {string} pageTitleRegex    pageTitle regex
     */
    waitForPageReady(urlRegex, pageTitleRegex) {
        browser.waitUntil(
            () => browser.getUrl().match(urlRegex),
            TIMEOUT,
            `Unmatching url after navigation, current url : ${browser.getUrl()} , expecting : ${urlRegex}`,
        );
        browser.waitUntil(
            () => browser.getTitle().match(pageTitleRegex),
            TIMEOUT,
            `Unmatching url after navigation, current url : ${browser.getTitle()} , expecting : ${pageTitleRegex}`,
        );
        return this;
    }
}

module.exports = new BrowserHandler();
