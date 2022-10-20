import { Given, When, Then } from '@wdio/cucumber-framework';

import MainscreenPage from '../pageobjects/mainscreen.page';

Given('User on Mainscreen Page', async () => {
    await expect($("~TERBARU")).toBeDisplayed()
});

When('User tap tab TERBARU', async () => {
    await MainscreenPage.clickTabTerbaru();
});

Then('User should see Article TERBARU', async () => {
    await expect($("~Jatim Siap")).toBeDisplayed()
});

