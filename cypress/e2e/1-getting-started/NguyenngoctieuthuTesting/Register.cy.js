describe("Fullname", () => {
  beforeEach(() => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
    cy.wait(2000)
  });

  it("Leave emty", () => {
    cy.get("#fullname").focus().blur();
    cy.contains("Tên chủ tài khoản không được để trống.").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter number?", () => {
    cy.get("#fullname").type("Nguyen thu 111").blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.get(".base-button").click();
    cy.wait(2000)
    cy.get("#fullname").clear();
    cy.get("#fullname").type("111111").blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter special character?", () => {
    cy.get("#fullname").type("Nguyen thu 111 @#%%%");
    cy.get("#fullname")
      .invoke("val")
      .should("match", /^Nguyen thu 111\s*$/);
      cy.wait(2000)
  });

  it("Check enter full space?", () => {
    cy.get("#fullname").type("        ").blur();
    cy.contains("Tên chủ tài khoản không được để trống.").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter 1 character?", () => {
    cy.get("#fullname").type("1").blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter 2 character?", () => {
    cy.get("#fullname").type("Ng").blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter 7 character?", () => {
    cy.get("#fullname").type("Nguyễn").blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.wait(2000)
  });

  it("Check enter 8 character?", () => {
    cy.get("#fullname").type("Nguyễn N").blur();
    cy.contains("Họ và tên sai định dạng").should("not.exist");
    cy.wait(2000)
  });

  it("Check enter 9 character?", () => {
    cy.get("#fullname").type("Nguyễn Ng").blur();
    cy.contains("Họ và tên sai định dạng").should("not.exist");
    cy.wait(2000)
  });

  it("Check enter 55 character?", () => {
    cy.get("#fullname")
      .type("Nguyễn Hoàng Kim Bảo Trân Thảo My Quỳnh Thanh Vân Ái Linh")
      .blur();
    cy.contains("Họ và tên sai định dạng").should("not.exist");
    cy.wait(2000)
  });

  it("Check enter 99 character?", () => {
    cy.get("#fullname").type("1").blur();
    cy.contains("Họ và tên sai định dạng").should("not.exist");
    cy.wait(2000)
  });

  it("Check enter 100 character?", () => {
    cy.get("#fullname")
      .type(
        "Nguyễn Hoàng Kim Bảo Trân Thảo My Quỳnh Thanh Vân Ái Linh Nguyễn Hoàng Kim Bảo Trân Thảo My Quỳnh Thanh "
      )
      .blur();
    cy.contains("Họ và tên sai định dạng").should("not.exist");
    cy.wait(2000)
  });

  it("Check enter 101 character?", () => {
    cy.get("#fullname")
      .type(
        "Nguyễn Hoàng Kim Bảo Trân Thảo My Quỳnh Thanh Vân Ái Linh Nguyễn Hoàng Kim Bảo Trân Thảo My Quỳnh Thanh V"
      )
      .blur();
    cy.contains("Họ và tên sai định dạng").should("be.visible");
    cy.wait(2000)
  });
});

describe("Password", () => {
  beforeEach(() => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
    cy.wait(2000)
  });

  it("Valid password", () => {
    cy.get("#password").type("TieuThu2207 *").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
    cy.contains("Mật khẩu không được để trống").should("not.exist");
  });

  it("Check Leave empty?", () => {
    cy.get("#password").focus().blur();
    cy.contains("Mật khẩu không được để trống").should("be.visible");
  });

  it("Check enter full space?", () => {
    cy.get("#password").type("                     ").blur();
    cy.contains("Mật khẩu không được để trống").should("be.visible");
  });

  it("Not special character", () => {
    cy.get("#password").type("Tieuthu2207").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("be.visible");
  });

  it("Not upercase character", () => {
    cy.get("#password").type("tieuthu2207*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("be.visible");
  });

  it("Not lowercase character", () => {
    cy.get("#password").type("TIEUTHU*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("be.visible");
  });

  it("Check enter 6 character?", () => {
    cy.get("#password").type("TieuT*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("be.visible");
  });

  it("Check enter 7 character?", () => {
    cy.get("#password").type("TieuTh*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
  });

  it("Check enter 8 character?", () => {
    cy.get("#password").type("TieuThu*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
  });

  it("Check enter 13 character?", () => {
    cy.get("#password").type("TieuThu2207 *").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
  });

  it("Check enter 19 character?", () => {
    cy.get("#password").type("TieuThuuuuuuuu2207*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
  });

  it("Check enter 20 character?", () => {
    cy.get("#password").type("TieuThuuuuuuuu22072*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("not.exist");
  });

  it("Check enter 21 character?", () => {
    cy.get("#password").type("TieuThuuuuuuuu220720*").blur();
    cy.contains(
      "Mật khẩu phải từ 7-20 ký tự, bao gồm chữ cái hoa, thường và kí tự đặc biệt"
    ).should("be.visible");
  });
});
describe("ConfirmPassword", () => {
  beforeEach(() => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
    cy.get("#password").type("TieuThu2207 *").blur();
  });

  it("Valid ConfirmPassword", () => {
    cy.get("#confirm_password").type("TieuThu2207 *").blur();
    cy.contains("Mật khẩu nhập lại không chính xác").should("not.exist");
    cy.contains("Nhập lại mật khẩu không được để trống.").should("not.exist");
  });

  it("Invalid ConfirmPassword", () => {
    cy.get("#confirm_password").type("TieuThu22077*").blur();
    cy.contains("Mật khẩu nhập lại không chính xác").should("be.visible");
  });
});

describe("Email", () => {
  beforeEach(() => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
  });

  it("Check Leave empty?", () => {
    cy.get("#email").focus().blur();
    cy.contains("Email không được để trống.").should("be.visible");
  });

  it("Check valid email?", () => {
    cy.get("#email").type("a@gmail.com").blur();
    cy.contains("Email không được để trống.").should("not.exist");
  });

  it("Check full space?", () => {
    cy.get("#email").type("           ").blur();
    cy.contains("Email không được để trống.").should("be.visible");
  });

  it("Check any white space?", () => {
    cy.get("#email").type("tieu thugmail.com").blur();
    cy.contains("Email không đúng định dạng").should("be.visible");
  });

  it("Check missng @?", () => {
    cy.get("#email").type("tieuthugmail.com").blur();
    cy.contains("Email không đúng định dạng").should("be.visible");
  });

  it("Check missing '.'?", () => {
    cy.get("#email").type("tieuthugmail@com").blur();
    cy.contains("Email không đúng định dạng").should("be.visible");
  });

  it("Check special character?", () => {
    cy.get("#email").type("a%^&@gmail.com").blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 9 character?", () => {
    cy.get("#email").type("a@gmail.c").blur();
    cy.contains("Email không đúng định dạng").should("be.visible");
  });

  it("Check 10 character?", () => {
    cy.get("#email").type("a@gmail.co").blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 11 character?", () => {
    cy.get("#email").type("a@gmail.com").blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 55 character?", () => {
    cy.get("#email")
      .type("nguyen.van.a1111111111111234567890@exampledomain.com")
      .blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 99 character?", () => {
    cy.get("#email")
      .type(
        "nguyen.van.a11111111112345678901234567890abcdefghijklmno@exampledomain.com"
      )
      .blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 100 character?", () => {
    cy.get("#email")
      .type(
        "asdkfjqweur98wer89uwerf8wef7wef98w7ef97w98efwwef87wdfv9wef98w7ef9w8ef9@gmail.com"
      )
      .blur();
    cy.contains("Email không đúng định dạng").should("not.exist");
  });

  it("Check 101 character?", () => {
    cy.get("#email")
      .type(
        "asdkfjqweur98wer89uwerf8wef7wef98w7ef97w98efwwef87wdfv9wef98w7ef9w8ef9b@gmail.com"
      )
      .blur();
    cy.contains("Email không Email không đúng định dạng").should("be.visible");
  });
});

describe("successfull register", () => {
  beforeEach(() => {
    cy.visit("https://account.nganluong.vn/nganluong/register");
    cy.contains("button", "Tạo tài khoản cá nhân").click();
  });

  it("any invalid information 1", () => {
    cy.get("#fullname").type("Nguyễn Ngọc Tiểu Thư").blur();
    cy.get("#password").type("Tieuthu*").blur();
    cy.get("#confirm_password").type("Tieuthu*").blur();
    cy.get("#email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#phone_number").type("0935367").blur();
    cy.wait(2000);
    cy.get(".base-button").click();
  });

  it("any invalid information 2", () => {
    cy.get("#fullname").type("Nguyễn Ngọc Tiểu Thư 111").blur();
    cy.get("#password").type("Tieuthu*").blur();
    cy.get("#confirm_password").type("Tieuthu*").blur();
    cy.get("#email").type("Nguyenngoctieuthu2207&&@gmail.com").blur();
    cy.get("#phone_number").type("093536759").blur();
    cy.wait(2000);
    cy.get(".base-button").click();
  });

  it("valid full information", () => {
    cy.get("#fullname").type("Nguyễn Ngọc Tiểu Thư").blur();
    cy.get("#password").type("Tieuthu*").blur();
    cy.get("#confirm_password").type("Tieuthu*").blur();
    cy.get("#email").type("Nguyenngoctieuthu2207@gmail.com").blur();
    cy.get("#phone_number").type("0935367598").blur();
    cy.wait(15000);
    cy.get(".base-button").click({force : true});
    // click login button so that direct to login page
    cy.get('.base-button w-md-100').click();
  });
});
