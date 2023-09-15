const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
// acesso ao form
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // preencher o formulario
  preeencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo de testes')
    cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado')
    cy.get(el.inputTags).type('cypress')
  }

  // submeter o fofmulario
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // Verificar se o artigo foi criado
  verificarSeOArtigoFoiCriado () {
    cy.url().should('contain', 'article')
  }
}

export default new Articles()
