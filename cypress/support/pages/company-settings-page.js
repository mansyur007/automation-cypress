import {
    iframeLocator,
    companySettings
} from '../locator/locators';
import { getIframeBody} from '../function/iFrameHandling'
import { getFormattedDate,checkElementContainsValue } from '../function/utils'
import {fakeUserData} from "../fakeData";
class companySettingsPage {
    selectCity(city){
        cy.getBySel(companySettings.city_dropdown_container).should('be.visible').click()
        cy.getBySel(companySettings.city_dropdown_results).contains(city).should('be.visible').click()
    }
    inputZipCode(zipcode){
        cy.getBySel(companySettings.zip_code).clear().type(zipcode)
    }
    inputAddress(address){
        cy.getBySel(companySettings.business_address).clear().type(address)
    }
    inputWebsite(website){
        cy.getBySel(companySettings.website).clear().type(website)
    }
    inputFacebook(fb){
        cy.getBySel(companySettings.facebook).clear().type(fb)
    }
    inputInstagram(insta) {
        cy.getBySel(companySettings.instagram).clear().type(insta);
    }

    inputTwitter(twitter) {
        cy.getBySel(companySettings.twitter).clear().type(twitter);
    }

    inputLinkedIn(linkedin) {
        cy.getBySel(companySettings.linkedin).clear().type(linkedin);
    }

    inputWhatsApp(wa) {
        cy.getBySel(companySettings.whatsapp).clear().type(wa);
    }

    inputViber(viber) {
        cy.getBySel(companySettings.viber).clear().type(viber)
    }
    clickUpdateProfile(){
        cy.getBySel(companySettings.btn_update).click()
    }


    setupCompanyProfile(){
        const date = getFormattedDate()

        this.selectCity('Pekanbaru')
        this.inputZipCode(date)
        this.inputAddress('Address ' + date)
        getIframeBody(iframeLocator.txt_area_iframe).type( fakeUserData.left_desc)
        this.inputWebsite(date +'.abc')
        this.inputFacebook('fb' + date + '@facebook.com')
        this.inputInstagram( 'insta' + date + '@insta.com')
        this.inputTwitter('twit' + date + '@x.com')
        this.inputLinkedIn('link' + date + '@linked.com')
        this.inputWhatsApp('wa' + date )
        this.inputViber('viber' + date )
        this.clickUpdateProfile()
    }
    validateSettingCompanyProfile(){
        const date = getFormattedDate()

        cy.hold(2)
        const elements = [
            { viewBtn: companySettings.view_btn_phone, link: companySettings.left_link_phone, method: 'text' },
            { viewBtn: companySettings.view_btn_website, link: companySettings.left_link_website, method: 'text' },
            { viewBtn: companySettings.view_btn_instagram, link: companySettings.left_link_instagram, method: 'text' },
            { viewBtn: companySettings.view_btn_facebook, link: companySettings.left_link_facebook, method: 'text' },
            { viewBtn: companySettings.view_btn_twitter, link: companySettings.left_link_twitter, method: 'text' },
            { viewBtn: companySettings.view_btn_linkedin, link: companySettings.left_link_linkedin, method: 'text' },
        ];

        elements.forEach(({ viewBtn, link, method }) => {
            checkElementContainsValue(viewBtn, link, date, method);
        });
    }
    inputCompanyName(name){
        cy.getBySel(companySettings.field_company_name).should('be.visible').clear().type(name)

    }
    inputCompanyEmail(email){
        cy.getBySel(companySettings.field_company_email).should('be.visible').clear().type(email)
    }
    inputCompanyPhone(phone){
        cy.getBySel(companySettings.field_company_phone).should('be.visible').clear().type(phone)
    }
    selectCategoryBusiness(biznizes){
        cy.getBySel(companySettings.dropdown_company_business).should('be.visible').click()
        cy.getBySel(companySettings.content_company_business).contains(biznizes).should('be.visible').click()

    }
    clickUpdateBusiness(){
        cy.getBySel(companySettings.btn_update_business).click()
    }
    setupBusinessSettings() {
        const date = getFormattedDate()

        this.inputCompanyName('ARCHYROX ' + date);
        this.inputCompanyEmail(date + '@mailnator.com');
        this.inputCompanyPhone('+628' + date);
        this.selectCategoryBusiness('Contractor');
        this.clickUpdateBusiness()
    }
}

export default new companySettingsPage();