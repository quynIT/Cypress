describe("Register", () => {
  //   beforeEach(() => {
  //     cy.visit('https://account.nganluong.vn/nganluong/register')

  //   })

    it("Successfull", () => {
      cy.contains("button", "Tạo tài khoản cá nhân").click();
      cy.get("#fullname").type("Nguyễn Ngọc Thư");
      cy.get("#password").type("Tieuthu2207*");
      cy.get("#confirm_password").type("Tieuthu2207*");
      cy.get("#email").type("tieuthu2207@gmail.com");
      cy.get("#phone_number").type("0926357895");
      cy.get('#userregisterpersonalform-career').select('Học sinh - sinh viên');
      cy.get('#userregisterpersonalform-title').select('Khác');
      cy.get('.base-button').click();
    });

  it("Leave empty", () => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
    cy.get(".base-button").click();
  });

  it("Enter number")
});

describe('Password', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://account.nganluong.vn/nganluong/register')
    cy.contains('button', 'Tạo tài khoản cá nhân').click();
  });
  it
})
