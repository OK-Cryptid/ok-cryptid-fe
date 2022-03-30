describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
    expect(true).to.equal(true)
  });

  it('Should start on the home page and click on a cryptid', () => {
    cy.get('.card-img').eq(0).click()
  })

  it('Should view the cryptids information page', () => {
    cy.get('.card-img').eq(0).click()
    cy.get('.single-cryptid-photo')
    cy.get('.cryptid-details')
    cy.get('.cryptid-name')
    cy.get('.cryptid-danger')
    cy.get('.gold-container')
    cy.get('.cryptid-description')
    cy.get('.cryptid-button-sightings')
  })

});
