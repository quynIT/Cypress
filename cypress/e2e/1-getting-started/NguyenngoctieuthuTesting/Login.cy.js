describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.nganluong.vn/vn/home.html");
    cy.get(".account-link").click();
  });
  // TC09
  it("Leave all null?", () => {
    cy.get("#loginform-email").focus().blur();
    cy.get("#loginform-password").focus().blur();
    cy.get(".base-button").click();
    cy.contains("Email không được để trống.").should("be.visible");
    cy.contains("Mật khẩu không được để trống.").should("be.visible");
  });
  //TC01
  it("Successful Login?", () => {
    cy.get("#loginform-email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#loginform-password").type("Tieuthu*").blur();
    cy.pause();
    cy.get(".base-button").click();
  });
  //TC02
  it("All valid field but not tick captcha?", () => {
    cy.get("#loginform-email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#loginform-password").type("Tieuthu*").blur();
    cy.get(".base-button").click();
    cy.contains("Mã xác thực không đúng.").should("be.visible");
  });
  //TC03
  it("All fields but password not match?", () => {
    cy.get("#loginform-email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#loginform-password").type("Tieuthunguyen*").blur();
    cy.pause();
    cy.get(".base-button").click();
    cy.contains("Tài khoản hoặc mật khẩu không chính xác").should("be.visible");
  });
  //TC04
  it("Enter email and tick captcha?", () => {
    cy.get("#loginform-email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#loginform-password").focus().blur();
    cy.pause();
    cy.contains("Mật khẩu không được để trống.").should("be.visible");
    cy.get(".base-button").should("be.disabled");
  });
  //TC05
  it("Enter email?", () => {
    cy.get("#loginform-email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#loginform-password").focus().blur();
    cy.contains("Mật khẩu không được để trống.").should("be.visible");
    cy.get(".base-button").should("be.disabled");
  });
  //TC06
  it("Enter password and tick captcha?", () => {
    cy.get("#loginform-email").focus().blur();
    cy.get("#loginform-password").type("Tieuthu*").blur();

    cy.contains("Email không được để trống.").should("be.visible");
    cy.contains("Mật khẩu không được để trống.").should("not.exist");
    cy.pause();
    cy.get(".base-button").should("be.disabled");
  });
  //TC07
  it("Enter password?", () => {
    cy.get("#loginform-email").focus().blur();
    cy.get("#loginform-password").type("Tieuthu*").blur();
    cy.contains("Email không được để trống.").should("be.visible");
    cy.contains("Mật khẩu không được để trống.").should("not.exist");
    cy.get(".base-button").should("be.disabled");
    
  });
  //TC08
  it("Tick captcha?", () => {
    cy.get("#loginform-email").focus().blur();
    cy.get("#loginform-password").focus().blur();
    cy.pause();
    
    cy.contains("Email không được để trống.").should("be.visible");
    cy.contains("Mật khẩu không được để trống.").should("be.visible");
  });


})