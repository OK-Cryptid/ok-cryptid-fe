import '../fixtures/singleCryptid.json'
describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.intercept({
      method: 'POST',
      url: 'https://cryptic-garden-95478.herokuapp.com/graphql',
      headers: {
        'x-gqpl-operation-name': 'GetCryptid'
      }
    },
      {
        fixture: 'singleCryptid.json'
      })
      cy.visit('http://localhost:3000')
  })


it('Should start on the home page and click on a cryptid', () => {
    cy.get('.home-message').contains('Ok Cryptid')
    cy.get('\#\\32').click()
  })

  it('Should view the cryptids information page', () => {
    cy.get('.card-img').eq(1).click()
    cy.get('.single-cryptid-photo')
    cy.get('.cryptid-details')
    cy.get('.cryptid-name').contains('Bigfoot')
    cy.get('.cryptid-danger').contains('Danger Level:')
    cy.get('.gold-container').contains('7/10')
    cy.get('.cryptid-description').contains('Description:')
    cy.get('.cryptid-button-sightings')
  })

});
