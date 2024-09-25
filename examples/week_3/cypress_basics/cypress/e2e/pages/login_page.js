export class LoginPage {

    emailSelector = ':nth-child(2) > .form-control';
    passwordSelector = ':nth-child(3) > .form-control';
    signInSelector = '.btn';

    submitEmail(email){
        cy.get(this.emailSelector).type(email);
    }

    submitPassword(password){
        cy.get(this.passwordSelector).type(password);
    }

    clickSubmit(){
        cy.get(this.signInSelector).click()
    }
}