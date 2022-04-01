describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('Should start on the home page and click sighting button', () => {
    cy.get('.logo')
    cy.get('.home-message').contains('Ok Cryptid')
    cy.get('.home-card-container')
    cy.get('.sightings-button').click()
  })

  it('Should display the Seach by Cryptids button and the search by zipcode', ()=> {
    cy.get('.sightings-button').click()
    cy.get('.cryptid-button')
    cy.get('.zipcode-input')
    cy.get('.sightings-text').contains('Sightings')
  })

  it('Should display all the sightings of the cryptids', () => {
    cy.get('.sightings-button').click()
    cy.get('.all-sightings-container')
  })

  it('Should click on a sighting of a random cryptoid, and view itss information', () => {
    cy.get('.sightings-button').click()
    cy.get('\#\\32').click()
    cy.get('.sighting-photo')
    cy.get('.sighting-title').contains('Sector B Coolant Reserve')
    cy.get('.sighting-location').contains('Location:')
    cy.get('#sightingDescription')
  })

  it('Should filter by searched cryptid and see all the sightings of those cryptoids and move back to all the sightings', () => {
    cy.get('.sightings-button').click()
    cy.get('.cryptid-button').click()
    cy.get('#Skinwalker').click()
    cy.get('.all-sightings-container')
    cy.get('.cryptid-button').click()
    cy.get('.dropdown-container > :nth-child(1)').click()
  })

  it('Should click on logo and move to home page', () => {
    cy.get('.sightings-button').click()
    cy.get('.logo').click()
    cy.get('.home-message').contains('Ok Cryptid')
  })

  it('Should click on ok, Cryptid and move to home page', () => {
    cy.get('.sightings-button').click()
    cy.get('.logo-text').click()
    cy.get('.home-message').contains('Ok Cryptid')
  })

});
