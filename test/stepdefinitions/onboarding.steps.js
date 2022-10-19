import { Given, When, Then } from '@wdio/cucumber-framework';

import OnboardingPage from '../pageobjects/onboarding.page';

Given('User on Onboarding page', async () => {
    await OnboardingPage.validateMessageCarousel('Selamat Bergabung!');
});

When('User Click Button Lanjut for 1st time', async () => {
    await OnboardingPage.clickButtonLanjut();
});

Then('User should see text Dari Teks Jadi Suara', async () => {
    await OnboardingPage.validateMessageCarousel('Dari Teks Jadi Suara');
});

When('User Click Button Lanjut for 2nd time', async () => {
    await OnboardingPage.clickButtonLanjut();
});

Then('User should see text Suka Tampilan Koran?', async () => {
    await OnboardingPage.validateMessageCarousel('Suka Tampilan Koran?');
});

When('User Click Button Lanjut for 3rd time', async () => {
    await OnboardingPage.clickButtonLanjut();
});

Then('User should see text Ayo Daftar Sekarang!', async () => {
    await OnboardingPage.validateMessageCarousel('Ayo Daftar Sekarang!');
});

When('User Click Button Lanjut for 4th time', async () => {
    await OnboardingPage.clickButtonFinish();
});

Then('User should see Paywall berlangganan Page Or Mainscreen page', async () => {
    await OnboardingPage.validateMessagePaywallOrMainscreen();
});

