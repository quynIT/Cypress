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

  it('Check when the value of the [Password] field if it contains the special character', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypassword@');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the value of the [Password] field if 6 characters are entered', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypass');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the value of the [Password] field if 7 characters are entered', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypassw');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the value of the [Password] field if 20 characters are entered', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypasswordisthebesti');

    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the value of the [Password] field if 21 characters are entered', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypasswordisthebestin');

    cy.get('.base-button').click();

    cy.wait(5000);
  });
});

describe('Login Test With Captcha', () => {
  it('Check when the [Captcha] box is clicked but the [Email] field is wrong', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('abc@gmail.com');
    cy.get('#loginform-password').type('mypasswordisthebesti');

    cy.wait(10000);
    cy.get('.base-button').click();

    cy.wait(5000);
  });

  it('Check when the [Captcha] box is clicked but the [Email] field and the [Password] field are right', () => {
    cy.visit('https://account.nganluong.vn/nganluong/login');

    cy.get('#loginform-email').type('phangiadat123@gmail.com');
    cy.get('#loginform-password').type('0909205792D@t');

    cy.wait(20000);
    cy.get('.base-button').click();

    cy.wait(5000);
  });
});