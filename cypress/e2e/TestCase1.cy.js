describe('Launch Application', () => {
    it('Launch the test Application', () => {
        cy.visit('http://jupiter.cloud.planittesting.com')
        cy.get('#nav-contact > a').click()
        cy.get('.btn-contact').click()
        cy.get('#forename').type('Arnold')
        cy.get('#email').type('noemail.com')
        cy.get('#message').type('Test')
        cy.get('.btn-contact').click()

    })
    
  })

