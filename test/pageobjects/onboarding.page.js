
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage {
    get buttonLanjut () {
        return $('id:bt_lanjut');
    }

    async clickButtonLanjut () {
        await this.buttonLanjut.click()
    }

    async validateMessageCarousel(message) {
        await expect($(`//*[@text="${message}"]`)).toBeDisplayed();
    }
}

export default new OnboardingPage();
