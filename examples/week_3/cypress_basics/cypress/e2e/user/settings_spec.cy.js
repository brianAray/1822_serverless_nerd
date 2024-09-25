describe('/settings', () => {
    beforeEach(() => {
        cy.login("user_unique_1@email.com", "valid");
        // cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
        cy.contains('Settings').click();
    });

    it('greets us with Your Settings', () => {
        cy.get('.text-xs-center').should('contain', "Your Settings");
    })
})