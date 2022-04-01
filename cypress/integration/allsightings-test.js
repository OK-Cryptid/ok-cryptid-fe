describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
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
