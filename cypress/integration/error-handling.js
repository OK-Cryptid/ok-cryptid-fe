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

  it('should display 404 page when visiting a bad link', () => {
    cy.visit('http://localhost:3000/4823483290434903')
      .get('.error').contains('PAGE NOT FOUND')
      .get('.message').contains('We are so sorry, but this page does not exist')
  })
})