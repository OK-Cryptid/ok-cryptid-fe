import '../fixtures/allCryptids.json'
describe('Home page cypress test', () => {

  beforeEach(() => {
    cy.intercept({
      method: 'POST',
      url: 'https://cryptic-garden-95478.herokuapp.com/graphql',
      headers: {
        'x-gqpl-operation-name': 'GetCryptids'
      }
    },
      {
        fixture: 'allCryptids.json'
      })
    cy.visit('http://localhost:3000')
  })
  
  it('Should render elements to the page', () => {
    cy.get('.logo')
    cy.get('.home-message')
    cy.get('.home-card-container')
    cy.get('\#\\32')
  })

  it('Should click on button and move to sightings page', () => {
    cy.get('.sightings-button').click()
    cy.get('.sightings-text').contains('Sightings')
  })
  it('Should click on the logo and go back to the home page', () => {
    cy.get('.logo-text').click()
    cy.get('.home-message').contains('Ok Cryptid')
  })

});
