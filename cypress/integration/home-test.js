describe('Home page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should render elements to the page', () => {
    cy.get('.logo')
    cy.get('.home-message')
    cy.get('.home-card-container')
  })

  it('Should click on button and move to sightings page', () => {
    cy.get('button').click()
    cy.get('.logo').click()
  })

});
