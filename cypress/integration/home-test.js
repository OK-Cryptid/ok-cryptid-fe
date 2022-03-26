describe('Home page cypress test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
    expect(true).to.equal(true)
  });

  it('Should render elements to the page', () => {
    cy.get('.logo')
    cy.get('#root > :nth-child(3)')
    cy.get('button')
  })

  it('Should click on button and move to sightings page', () => {
    cy.get('button').click()
    cy.get('#root > :nth-child(2)')
      .contains('Sightings')
  })

});

