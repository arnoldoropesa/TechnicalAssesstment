describe('Launch Application', () => {
    it('Launch the test Application', () => {
        cy.visit('http://jupiter.cloud.planittesting.com')
       
       //1. From the home page go to contact page
        cy.get('#nav-contact > a').click()
        cy.get('.btn-contact').click()

        //2. Populate mandatory fields
        cy.get('#forename').type('Arnold')
        cy.get('#email').type('noemail.com')
        cy.get('#message').type('Test')

        //3. Click submit button
        cy.get('.btn-contact').click()

        //4. Validate successful submission message
       
        // Example dynamic wait for an element to become visible
        cy.wait(10000);
        cy.get('.alert-success')
.should('be.visible')
.contains("we appreciate your feedback")
    

  })

})