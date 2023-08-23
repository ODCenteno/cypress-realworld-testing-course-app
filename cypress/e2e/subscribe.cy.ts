describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  context('hero', () => {
    it('allows users to subscribe to the email list', () => {
      cy.getByData('email-input').type('tom@aol.com');
      cy.getByData('submit-button').click();
      cy.getByData("success-message").should("exist").contains('tom@aol.com');
    });
  
    it('does NOT allow an invalid email address', () => {
      cy.getByData('email-input').type('tom');
      cy.getByData('submit-button').click();
      cy.getByData("success-message").should("not.exist");
    });
  
    it('should NOT allow to subscribe an existing user', () => {
      cy.getByData('email-input').type('john@example.com');
      cy.getByData('submit-button').click();
      cy.getByData('server-error-message')
        .should('exist')
        .contains('Error: john@example.com already exists. Please use a different email address.')
    })
  })

  context('Courses section', () => {
    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/testing-your-first-application');
    })

    it('Course: Testing Fundations', () => {
      cy.getByData('course-1').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/testing-foundations');
    })
    it('Course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click();
      cy.location('pathname').should('eq', '/cypress-fundamentals');
    })
  })
})