const WebElementHelper = require ('./WebElementHelper');

const TIMEOUT = 60000;

class Common {
    waitForPageLoading() {
        const LOADING_LOCATOR = '.q-loading-bar';
        $(LOADING_LOCATOR).waitUntil(
                () => WebElementHelper.verifyAttribute(LOADING_LOCATOR,'aria-hidden',true,
            ),
            { timeout: TIMEOUT, timeoutMsg: `Timeout while loading this page, ${TIMEOUT}`,
            },
        );
    }
}

module.exports = new Common();
