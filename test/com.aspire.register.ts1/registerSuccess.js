const homepage = require('../../pageobjects/com.aspire.pages.account/homepage');
var registerpage = require('../../pageobjects/com.aspire.pages.account/registerPage');
var otpPage = require('../../pageobjects/com.aspire.pages.account/optPage');
var incorporatedSelectorPage = require('../../pageobjects/com.aspire.pages.account/incorporatedSelectorPage');
var selectedMethodPage = require('../../pageobjects/com.aspire.pages.account/selectedMethodPage');
var personDetailsPage = require('../../pageobjects/com.aspire.pages.account/personDetailsPage');
var businessDetailsPage = require('../../pageobjects/com.aspire.pages.account/businessDetailsPage');
var optPage = require('../../pageobjects/com.aspire.pages.account/optPage');
const message = require('../../resources/messages.json');

const verifyPhoneMsg = message.VERIFY_OPT_PHONE_SUCCESS;
const verifyMailMsg = message.VERIFY_OPT_MAIL_SUCCESS;
const registerData = require('../../test-data/testData_register');
const identifyVerificationPage = require('../../pageobjects/com.aspire.pages.account/identifyVerificationPage');


describe("Successfully register account", function() {
    it("Test scenario 1: TS1 - Successfully register account", function() {
        homepage.open();
        registerpage = homepage.register();
        registerpage.inputAccountInfo(registerData.USER);

        registerpage.clickContinue();        
        otpPage.verifyOtpCodeAndCheck(registerData.USER, verifyPhoneMsg);

        incorporatedSelectorPage = otpPage.clickContinueToSelectedMethod();
        selectedMethodPage = incorporatedSelectorPage.clickRegisteredWithACRA();
        personDetailsPage = selectedMethodPage.clickManualVerification();
        
        personDetailsPage.clickGetStarted();
        personDetailsPage.setPersonalInfos(registerData.USER);

        personDetailsPage.clickSubmit();
        otpPage.verifyOtpCodeAndCheck(registerData.USER, verifyMailMsg);

        optPage.clickContinueToBusinessDetails();
        businessDetailsPage.clickContinue();
        businessDetailsPage.setBusinessInfos(registerData.USER).clickSubmit();

        identifyVerificationPage.clickContinue();
        identifyVerificationPage.completeVerification(registerData.USER);

    });
});