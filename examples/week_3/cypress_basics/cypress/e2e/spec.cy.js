describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com');

    // cy.get("")
    cy.get('#APjFqb').type("Automation Testing Guide{enter}");

    cy.contains('Videos').click();

    cy.get(':nth-child(1) > :nth-child(1) > .g > [jsslot="1"] > :nth-child(1) > [jscontroller="rTuANe"] > :nth-child(1) > .xe8e1b > .nhaZ2c > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').should('contain', 'Where Should I Start For Automation Testing?');

  })})