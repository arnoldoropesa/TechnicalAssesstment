        describe('Test Case 1: Contact Page Form Submission', () => {
            it('should navigate to contact page, submit form, verify error messages, populate mandatory fields, and validate errors are gone', () => {
              // Visit the home page
              cy.visit('http://jupiter.cloud.planittesting.com');
                             
              // Navigate to the contact page
              cy.get('#nav-contact > a').click();
          
              // Click the submit button without populating mandatory fields
              cy.get('.btn-contact').click();
          
              // Verify error messages
              cy.get('.error-message').should('have.length', 2); // Assuming there are two mandatory fields
          
              // Populate mandatory fields
              cy.get('#name').type('John Doe');
              cy.get('#email').type('john.doe@example.com');
          
              // Click the submit button again
              cy.get('form').contains('Submit').click();
          
              // Validate errors are gone
              cy.get('.error-message').should('not.exist');
            });
          });
          

    })
    
  })

