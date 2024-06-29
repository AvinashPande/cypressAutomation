
/// <reference types="cypress" />

import { registorPage } from "../../pages/registorPage";

const registorObj = new registorPage();
import registerdata from "../../fixtures/registerData.json";



describe('Automation block', () =>{

    it('Verify registration page', ()=>{

        registorObj.openURL(); 
        registorObj.enterFirstName(registerdata.firstName);
        registorObj.enterLastName(registerdata.lastName);
        registorObj.enterEmail(registerdata.email);
        registorObj.enterTeliphone(registerdata.telephone);
        registorObj.enterPassword(registerdata.password);
        registorObj.enterCpassword(registerdata.password);
        registorObj.selectPolicy();
        registorObj.clickContineu();



    })
})