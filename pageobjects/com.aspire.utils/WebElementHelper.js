const chai = require('chai');
const expect = chai.expect;

const TIMEOUT = 30000;

class WebElementHelper {
    /**
     * @param {string} locator
     */
    waitForElement(locator) {
        $(locator).waitForExist({ timeout: TIMEOUT, reverse: false });
        return this;
    }

    /**
     * @param {string} locator
     */
    waitForElementDisplayed(locator) {
        $(locator).waitForDisplayed({ timeout: TIMEOUT, reverse: false });
        return this;
    }

    /**
     * @param {string} locator
     */
    waitForElementClickable(locator) {
        $(locator).waitForClickable({ timeout: TIMEOUT });
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementExisting(locator) {
        expect(
            $(locator).isExisting(),
            `Element ${locator} does not exist`,
        ).to.be.true;
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementNotExisting(locator) {
        expect($(locator).isExisting(), `Element ${locator} does exist`).to
            .be.false;
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementDisplayed(locator) {
        expect(
            $(locator).isDisplayed(),
            `Element ${locator} is not displayed`,
        ).to.be.true;
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementNotDisplayed(locator) {
        expect($(locator).isDisplayed(), `Element ${locator} is displayed`)
            .to.be.false;
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementEnabled(locator) {
        expect($(locator).isEnabled(), `Element ${locator} is not enabled`)
            .to.be.true;
        return this;
    }

    /**
     * @param {string} locator
     */
    verifyElementDisabled(locator) {
        expect(
            $(locator).isEnabled(),
            `Element ${locator} is not disabled`,
        ).to.be.false;
        return this;
    }

    /**
     * @param {string} locator
     * @param {string} text
     */
    verifyText(locator, text) {
        expect($(locator).getText()).to.equal(text);
        return this;
    }

    /**
     * @param {string} locator
     */
    getText(locator) {
        return $(locator).getText();
    }

    /**
     * @param {string} locator
     */
    getValue(locator) {
        return $(locator).getValue();
    }

    /**
     * @param {string} locator
     */
    getAttribute(locator, attribute) {
        return $(locator).getAttribute(attribute);
    }

    /**
     * @param {string} locator
     * @param {string} attribute
     * @param {string} value
     */
    verifyAttribute(locator, attribute, value) {
        const result = this.getAttribute(locator, attribute);
        expect(result).to.include(value);
        return this;
    }    

    /**
     * @param {string} locator
     * @param {string} value
     */
    setValue(locator, value) {
        this.waitForElement(locator);
        $(locator).setValue(value);
        return this;
    }

    /**
     * @param {string} locator
     * @param {string} value
     */
    inputValue(locator, value) {
        this.waitForElement(locator);
        $(locator).addValue(value);
        return this;
    }

    /**
     * @param {string} locator
     */
    click(locator) {
        this.waitForElementDisplayed(locator);
        this.waitForElementClickable(locator);
        $(locator).click();
        return this;
    }
}

module.exports = new WebElementHelper();
