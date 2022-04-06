describe('Error handling', () => {

  it('Should show an error message with a 500 error', () => {
    cy.intercept('POST', 'https://cryptic-garden-95478.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 500,
        fixture: 'allCryptids.json'
      })
    })
    cy.visit('http://localhost:3000')
      .get('.modal-content').contains('Response not successful: Received status code 500')
  })
})