const CONFIG = require('./configuration.json');

const config = () => ({
    PATH: {
        URL: `${CONFIG.DEFAULT_URL}/${CONFIG.DEFAULT_DOMAIN}`
    },
    HOMEPAGE: {
        URL_REGEX: ".*/vn.*",
        PAGE_TITLE_REGEX: "bbbbbbbbbbbbbb"
    },
    REGISTER_PAGE: {
        URL_REGEX: ".*/register.*",
        PAGE_TITLE_REGEX: ".*Login to Aspire.*"
    },
    OTP_PAGE: {
        URL_REGEX: ".*/otp/.*",
        PAGE_TITLE_REGEX: ".*Let's get started.*"
    },
    INCORPORATED_SELECTOR_PAGE: {
        URL_REGEX: ".*incorporate-selector.*",
        PAGE_TITLE_REGEX: ".*Is your business incorporated in Singapore?.*"
    },
    SELECTED_METHOD: {
        URL_REGEX: ".*register/select-method.*",
        PAGE_TITLE_REGEX: ".*Let’s know you better!.*"
    },
    PERSON_DETAILS_PAGE: {
        URL_REGEX: ".*kyc-dashboard/person-detail.*|.*person-edit.*",
        PAGE_TITLE_REGEX: ".*Complete your verification.*"
    },
    BUSINESS_DETAILS_PAGE: {
        URL_REGEX: ".*kyc-dashboard/business-detail.*|.*business-edit.*",
        PAGE_TITLE_REGEX: ".*Complete your verification.*"
    },
    IDENTIFY_VERIFICATION_PAGE: {
        URL_REGEX: ".*kyc-dashboard/identify-detail|verify-identity.*" ,
        PAGE_TITLE_REGEX: "Complete your verification|"
    }
});

module.exports = config();
