/// <reference types="cypress" />

describe('PinPad', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should put the correct pin password', function () {
    cy.get('[role="key-4"]').click();
    cy.get('[role="key-4"]').click();
    cy.get('[role="key-5"]').click();
    cy.get('[role="key-5"]').click();

    cy.get('h1').should("contain", 'OK')
  });

  it('should put the correct pin password', function () {
    cy.get('[role="key-1"]').click();
    cy.get('[role="key-1"]').click();
    cy.get('[role="key-1"]').click();
    cy.get('[role="key-1"]').click();

    cy.get('h1').should("contain", 'ERROR')
  });
});