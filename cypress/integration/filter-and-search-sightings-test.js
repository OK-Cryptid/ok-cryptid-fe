
describe('Filter the search by the cryptid', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should filter the sightings by the alien cryptid', () => {
    cy.get('.sightings-button').click()
    cy.get('.cryptid-button').click()
    cy.get('#Alien').click()
    cy.get('.logo-text').click()
  })

  it('Should filter by searching location', () => {
    cy.get('.sightings-button').click()
    cy.get('input[type="text"]').type('C')
    cy.get('input[type="text"]').type('o')
    cy.get('input[type="text"]').type('l')
    cy.get('input[type="text"]').type('o')
    cy.get('input[type="text"]').type('r')
    cy.get('input[type="text"]').type('a')
    cy.get('input[type="text"]').type('d')
    cy.get('input[type="text"]').type('o')
  })

})