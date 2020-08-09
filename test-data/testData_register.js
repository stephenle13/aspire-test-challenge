const utils = require('../pageobjects/com.aspire.utils/NumberUtils');
const faker = require('faker');


const registerData = () => ({
    USER: {
        name: faker.name.findName(),
        email: faker.internet.exampleEmail(),
        phoneNumber: utils.autoGenerateNumber(),
        whereYouHeardAboutUs: "Facebook",
        optCode: 123456,
        birthday: "7",
        country: "Angola",
        gender: "Male",
        purpose: "Debit Card",
        businessName: "ACB COMPANY LTD",
        regisType: "Limited liability partnership",
        role: "Company Director",
        industry: "Heavy Services",
        subIndustry: "Energy",
        uen: utils.autoGenerateUEN(),
        idNo: utils.autoGenerateNumber(),
    },
});

module.exports = registerData();