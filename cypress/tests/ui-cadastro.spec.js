/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 200,
      fixture: 'cadastro-com-sucesso'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder=Username]').type('chapterv345')
    cy.get('input[type=email]').type('chapterv345@mail.com')
    cy.get('input[type=password]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro de usuário com e-mail já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-email-existente'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder=Username]').type('chapterv345')
    cy.get('input[type=email]').type('chapterv87656@mail.com')
    cy.get('input[type=password]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
