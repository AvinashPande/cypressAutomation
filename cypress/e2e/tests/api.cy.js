/// < references type="cypress"/>

describe("api testing", () => {
    
  it("Test cases for get method", () => {

    cy.visit("https://www.amazon.in/")

    cy.get('#twotabsearchtextbox').type("realme");

    cy.get('.s-suggestion-container').first().click();

  });

  xit("Test cases for post method", () => {});

  xit(" Test cases for put method", () => {});
});
