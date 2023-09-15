/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    // Arrange
    cy.login()
    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
    // acesso ao form
    articles.acessarOFormulario()

    // preencher o formulario
    articles.preeencherFormulario()

    // submeter o formulario
    articles.submeterFormulario()

    // Verificar se o artigo foi criado
    articles.verificarSeOArtigoFoiCriado()
  })
})
