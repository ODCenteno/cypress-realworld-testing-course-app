describe('User journey test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it.only('test the user journey when take a course lesson', () => {
    cy.getByData('course-0').find('a').contains('Get started').click();
    cy.location('pathname').should('eq', '/testing-your-first-application');
    cy.getByData('next-lesson-button').should('exist').click();
    cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview');
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname')
      .should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test');
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname')
      .should('eq', '/testing-your-first-application/setting-up-data-before-each-test');
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname')
      .should('eq', '/');
  })
})