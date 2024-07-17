describe('Test file upload', () => { 

    it('File Upload', () => {

        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.get("#file").selectFile("demo.pdf");
    })

    it('File from fixtur', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.fixture('demo1.pdf').as('file1')
        cy.get("#file").selectFile('@file1',{ action : "drag-drop"});


        
    });



 })