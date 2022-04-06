
describe('Filter the search by the cryptid', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should filter the sightings by the alien cryptid', () => {
    cy.get('.sightings-button').click()
      .get('.cryptid-button').click()
      .get('#Alien').click()
      .get('.logo-text').click()
  })

  it('Should filter by searching location', () => {
    cy.get('.sightings-button').click()
      .get('input[type="text"]').type('Colorado')
      .get('.all-sightings-container')
      .get('.card-img').should('have.length', 3)
  })

  it('Should display apology message when no sighting found', () => {
    cy.get('.sightings-button').click()
      .get('input[type="text"]').type('Ohio')
      .get('.no-sightings').contains('Cryptids have evaded being sighted at this location. Try another search.')
  })

})