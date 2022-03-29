describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
    expect(true).to.equal(true)
  });

  it('Should start on the home page and click sighting button', () => {
    cy.get('button').click()
  })

  it('Should display the Seach by Cryptids button and the search by zipcode', ()=> {
    cy.get('button').click()
    cy.get('.cryptid-button')
    cy.get('.zipcode-input')
  })

  it('Should display all the sightings of the cryptids', () => {
    cy.get('button').click()
    cy.get('.all-sightings-container')
  })

  it('Should click on logo and move to home page', () => {
    cy.get('button').click()
    cy.get('.logo').click()
  })

  it('Should click on ok, Cryptid and move to home page', () => {
    cy.get('button').click()
    cy.get('.logo-text').click()
  })

});