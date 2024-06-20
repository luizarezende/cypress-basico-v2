/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html');
});

describe('Central de Atendimento ao Cliente TAT', function() {  
    
    Cypress._.times(3, function () {
        it('testa a página da política de privacidade de forma independente', function() {
            cy.get('#privacy a')
              .invoke('removeAttr', 'target')
              .click();
            cy.contains('Talking About Testing').should('be.visible'); 
            cy.title().should('contain', 'Política de privacidade'); 
        });
    })

});
