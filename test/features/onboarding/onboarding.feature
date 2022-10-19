@onboarding

Feature: Onboarding Feature

    Scenario: User can see Onboarding Page and should see mainscreen
        Given User on Onboarding page
        When User Click Button Lanjut for 1st time
        Then User should see text Dari Teks Jadi Suara
        When User Click Button Lanjut for 2nd time
        Then User should see text Suka Tampilan Koran?
        When User Click Button Lanjut for 3rd time
        Then User should see text Ayo Daftar Sekarang!
        When User Click Button Lanjut for 4th time
        Then User should see Paywall berlangganan Page Or Mainscreen page
