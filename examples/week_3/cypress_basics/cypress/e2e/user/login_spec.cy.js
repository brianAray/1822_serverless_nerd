import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

describe('/login', () => {
    beforeEach(() => {
        cy.visit("https://conduit.realworld.how/login");
    })

    it('greets with Sign in', () => {
        cy.contains('h1', 'Sign in');
    });

    it('links to /register', () => {
        cy
        .contains('Need an account?')
        .should('have.attr', 'href', '/register');
    });

    it('prevents us from clicking Sign in until both inputs are filled', () => {
        cy.get('form').contains('Sign in').should('be.disabled');

        // cy.get(':nth-child(2) > .form-control').type("asdf");
        loginPage.submitEmail("asdf")
        // cy.get(':nth-child(3) > .form-control').type("asciwasdfadf");
        loginPage.submitPassword("asdfasdf34e");

        cy.get('form').contains('Sign in').should('not.be.disabled');
    });

    it('requires valid email and password', () => {
        // cy.get(':nth-child(2) > .form-control').type("user_unique_1@email.com");
        // cy.get(':nth-child(3) > .form-control').type("invalid{enter}");

        // cy.get('.error-messages > li')
        //     .should('contain', 'email or password is invalid');

        cy.fixture('users').then((users) => {
            loginPage.submitEmail(users.email);
            loginPage.submitPassword("invalid");
            loginPage.clickSubmit();
            cy.get('.error-messages > li')
                .should('contain', 'email or password is invalid');
        })
    });


    it('navigates to homepage on successful login', () => {
        // cy.get(':nth-child(2) > .form-control').type("user_unique_1@email.com");
        // cy.get(':nth-child(3) > .form-control').type("valid{enter}");

        cy.fixture('users').then((users) => {
            loginPage.submitEmail(users.email);
            loginPage.submitPassword(users.password);
            loginPage.clickSubmit();
            cy.hash().should('eq', '');
        })
    });
})