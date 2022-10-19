import { Given, When, Then } from '@wdio/cucumber-framework';

import OnboardingPage from '../pageobjects/onboarding.page';

Given('User on Onboarding page', async () => {
    await OnboardingPage.validateMessageCarousel('Selamat Bergabung!')
});

When('User Click Button Lanjut', async () => {
    await OnboardingPage.clickButtonLanjut()
});

Then('User see text Dari Teks Jadi Suara', async () => {
    await OnboardingPage.validateMessageCarousel('Dari Teks Jadi Suara')
});

