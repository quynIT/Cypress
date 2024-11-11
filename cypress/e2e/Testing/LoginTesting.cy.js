describe('Login Test Without Captcha', () => {
  it('Check when the [Email] field is empty', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-password').type('mypassword');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the [Password] field is empty', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the [Email] field and the [Password] field are empty', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the [Captcha] box is unclicked', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypassword');

    cy.get('.base-button').click();

    cy.wait(5000);
  });
});