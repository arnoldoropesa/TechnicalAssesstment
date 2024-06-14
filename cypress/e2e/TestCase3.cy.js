describe('Launch Application', () => {
    it('Launch the test Application', () => {
        cy.visit('http://jupiter.cloud.planittesting.com')
        cy.get(".btn.btn-success.btn-large").click()
    })
    
  })

