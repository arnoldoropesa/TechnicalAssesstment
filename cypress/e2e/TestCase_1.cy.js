describe('Launch Application', () => {
    it('Launch the test Application', () => {
        cy.visit('http://jupiter.cloud.planittesting.com')
        cy.get('#nav-contact > a').click()
        cy.get('.btn-contact').click()

        //Validate Error Messages
        cy.get("span[id='forename-err']").should('have.text', 'Forename is required')
        cy.get("span[id='email-err']").should('have.text', 'Email is required')
        cy.get("span[id='message-err']").should('have.text', 'Message is required')

       // cy.get("span[id='forename-err']").contains("Forename is required")
       // cy.get("span[id='email-err']").contains("Email is required")
       // cy.get("span[id='message-err']").contains("Message is required")

        cy.get('#forename').type('Arnold')
        cy.get('#email').type('noemail.com')
        cy.get('#message').type('Test')
        cy.get('.btn-contact').click()
       
        // Validate errors are gone
        cy.get("span[id='forename-err']").should('not.exist');
        cy.get("span[id='email-err']").should('not.exist');
        cy.get("span[id='message-err']").should('not.exist');

    })
    
  })

