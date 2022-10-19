require('dotenv').config();

const log = 'error';
const device = '192.168.56.101:5555';
const apk = '/home/bernand/Downloads/apk/Kompas.id_base.apk';
const {
    removeSync
} = require('fs-extra');
const fs = require('fs');
const {
    exec
} = require('child_process');

exports.config = {
    runner: 'local',
    specs: [
        './test/features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:udid': device,
        'appium:automationName': 'UiAutomator2',
        'appium:app': apk,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': false,
        'appium:newCommandTimeout': 10,
        'appium:autoGrantPermissions': true,
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: log,
    bail: 0,
    baseUrl: 'http://localhost:4723/wd/hub',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            'appium',
            {
                args: {},
                command: 'appium',
            },
        ],
    ],
    framework: 'cucumber',
    specFileRetries: 1,
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            useCucumberStepReporter: false,
        }]
    ],
    cucumberOpts: {
        require: ['./test/stepdefinitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    // onPrepare: () => {
    //     fs.access(apk, fs.F_OK, (err) => {
    //         if (err) {
    //             throw err;
    //         }
    //     });
    //     removeSync('./allure-results/');
    //     removeSync('./allure-report/');
    //     exec('kill -9(lsof -t -i:4723)');
    // },

    beforeScenario: async (uri, feature, scenario) => {
        await driver.launchApp();
        await driver.pause(5000);
    },
    afterStep: async (test, context, {
        error
    }) => {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    afterScenario: async () => {
        await driver.closeApp();
        await driver.pause(3000);
    },

}