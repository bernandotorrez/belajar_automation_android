
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage {
    get buttonLanjut () {
        return $('id:bt_lanjut');
    }

    get buttonFinish () {
        return $('id:bt_selesai');
    }

    async clickButtonLanjut () {
        await this.buttonLanjut.click()
    }

    async clickButtonFinish () {
        await this.buttonFinish.click()
    }

    async validateMessageCarousel(message) {
        await expect($(`//*[@text="${message}"]`)).toBeDisplayed();
    }

    async validateMessagePaywallOrMainscreen() {
        await expect($('//*[contains(@text, "Siap Menjadi Bagian")]') || $('//*[@text="BERITA UTAMA"]')).toBeDisplayed();
    }
}

export default new OnboardingPage();
