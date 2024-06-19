Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.get('#firstName').type('Maria');
    cy.get('#lastName').type('Silva');
    cy.get('#email').type('email@email.com');
    cy.get('#open-text-area').type('Como podemos te ajudar?');
    cy.contains('button', 'Enviar').click();
})

