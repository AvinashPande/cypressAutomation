   /// <reference types="cypress"/>

   describe("test block", () => {

    xit("Test cases ", ()  => {

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

       cy.get('.oxd-form-row:nth-child(2)').type('Admin');
       cy.get('.oxd-form-row:nth-child(3)').type('admin123');
       cy.get('.oxd-form-actions > .oxd-button').click({ force : true});
       cy.log('you login now');

       
    
    });

    xit(' diffrent origin', () => { 
        
        cy.origin('https://practicetestautomation.com/practice-test-login/' , () => {
        
            let student = 'student'
            let password = 'Password123'
            cy.visit('https://practicetestautomation.com/practice-test-login/');
            cy.wait(3000);
            cy.get('#username').type(student);
            cy.get('#password').type(password);
            cy.get('#submit').click({ force : true});
            cy.log(' avinash you login now one second origin'); 

    })


    
       



    });

    it('api test', () => {  

        cy.request({

            method:'GET',
               url: 'https://gorest.co.in/public/v2/users/',
               header: {
                authorzation : "Bearer f62aa249a13882a209621f3bf9395f85b738a6182f67040920e4221f98067d4b"
               }
        })
        .then( (response) =>{ 
            cy.log(JSON.stringify(response.body.id));

            expect(response.status).to.equal(200);

            //expect(response.body[0].id).to.equal(6983511);
            //expect(response.body[0].email).to.equal("paramartha_somayaji_gov@armstrong.test");
            //expect(response.body[1].id).to.equal(6980530);

           // cy.log("Hi");


        })


    })


    
   });