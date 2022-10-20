
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class MainscreenPage {
    get tabTerbaru () {
        return $('//*[@text="TERBARU"]');
    }

    async clickTabTerbaru () {
        await this.tabTerbaru.click()
    }
}

export default new MainscreenPage();
