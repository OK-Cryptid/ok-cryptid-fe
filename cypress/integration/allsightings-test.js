describe('All sightings page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
    expect(true).to.equal(true)
  });

  it('Should start on the home page and click sighting buttom', () => {
    cy.get('button').click()
  })

  it('Should click on logo and move to home page', () => {
    cy.get('.logo').click()
    cy.get('#root > :nth-child(3)')
      .contains('Home Page')
  })

  it('Should click on ok, Cryptid and move to home page', () => {
    cy.get('.logo').click()
    cy.get('#root > :nth-child(3)')
      .contains('Home Page')
  })

});