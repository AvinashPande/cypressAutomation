 /// <reference types="cypress"/>
  export class registorPage {

   webLocatior =  {

                firstName: '#input-firstname',
                lastName: '#input-lastname',
                email : '#input-email',
                telephone: '#input-telephone',
                password: '#input-firstname',
                cPassword: '#input-confirm',
                privacyPolicy :'input[type="checkbox"]',
                continew : '.btn-primary'
                
   }

   openURL(){

    cy.visit(Cypress.env('URL'))
   }

   enterFirstName(fname){

    cy.get(this.webLocatior.firstName).type(fname);
   }

   enterLastName(lname){

    cy.get(this.webLocatior.lastName).type(lname);
   }

   enterEmail(email){

    cy.get(this.webLocatior.email).type(email)
   }

   enterTeliphone(teliphone){

    cy.get(this.webLocatior.telephone).type(teliphone)
   }

   enterPassword(password){

    cy.get(this.webLocatior.password).type(password)
   }

   enterCpassword(cpassword){
    cy.get(this.webLocatior.cPassword).type(cpassword)
   }

   selectPolicy(){

    cy.get(this.webLocatior.privacyPolicy).check();
   }

   clickContineu(){

    cy.get(this.webLocatior.continew).click();
   }


  } // class