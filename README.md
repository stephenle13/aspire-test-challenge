# Introduction
## This is the automation framwork for Aspire to test the application, which is using WebdriverIO.
### WebdriverIO is a custom implementation for selenium's W3C webdriver API. It is written in Javascript and packaged into 'npm' and runs on Node.js.

# Author: Le Phuong Dy (Linkedin: https://www.linkedin.com/in/dy-le-phuong-28a63816b/) 

# How to use
### Install Node.js from their official website Or Install Node.js using command line. Go to the terminal or command prompt & run the below commands:
    - install node
    - node -v //verify node version
    - npm install npm@latest -g

### Download the project from github
    - Project link:

# Project structure
```
---core
       |---configuration.json           Defines the default test URL of the application, 
       |                                also domains (sg: Singapore, vn: Vietnam, tl: Thailand, etc,.)
       |---pageDefination.js            Defines all page informations, it is used to check if the page has url regex, page title as expected.
---pageObjects
       |---com.aspire.utils             Defines all utilities for browser, web elements,                 
       |---com.aspire.pages             Contains an abstract class abtractPage.js, 
       |                                which can be extended from many classes to override it method(s)
       |---com.aspire.pages.account     Contains all classes which have the same functionality, 
       |                                example: they are using for automating a register process.
       |---(com.aspire.pages.loans)     ....
       |
---resouces                             Stores all data which uses for the tests, espicially important to test on multiple languages.
---test
       |---com.aspire.register          Stores all test scenarios which want to test on register function.
            |---ts1                     Test scenario ID
                |---registerSuccess.js  Name of the test
            |---(ts2)
                |---(registerWithAlreadyAccount.js)
---test-data                            Stores all test data
---package.json                         Defines all dependencies to use in this project
---wdio.conf.js                         Configs to run tests                 
```

# How to run test
### Run the below commands
    - npm run test
