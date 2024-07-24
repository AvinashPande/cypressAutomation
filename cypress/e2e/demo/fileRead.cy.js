
describe('Read file', () => { 
 
    it.skip('Read from pdf file', () => {


        cy.readFile('cypress/fixtures/demo.txt') .then((data) => {

            cy.log(" Demo file data is => ",data);
        })

        cy.readFile('cypress/fixtures/writefile.json') .then((data) => {

            cy.log("+Demo file data is => +",JSON.stringify(data));
        })
    })

 })