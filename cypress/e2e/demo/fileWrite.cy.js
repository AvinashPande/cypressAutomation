/// <

describe('write', () => {
    
    it('write File  ', () => {

        cy.writeFile('Demo.txt', "This is first write file \n");
        cy.writeFile('Demo.txt', "Adding this text in same file ",{flag :"a+" });

        cy.writeFile("cypress/fixtures/writefile.json",{ name : "Avinash Pandey", Age: 30, Wife : "Amba"})
        
    });




})