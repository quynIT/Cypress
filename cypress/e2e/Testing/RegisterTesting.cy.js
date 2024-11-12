describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://account.nganluong.vn/nganluong/register/personal");
    // Click vao button dang ky
    cy.get(".base-button").click();

    // Username kí tự db
    cy.get("#fullname").type("@$#^&*");
    // Username number
    cy.get("#fullname").type("1243525246");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);
    // Username 1 kí tự
    cy.get("#fullname").clear();
    cy.get("#fullname").type("a");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);
    // Username 100 kí tự
    cy.get("#fullname").clear();
    cy.get("#fullname").type(
      "Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A Nguyễn Văn A"
    );
    cy.get(".base-button").click({ force: true });

    cy.get("#fullname").clear();
    cy.get("#fullname").type("Phan Gia Đạt");
    cy.get(".base-button").click({ force: true });

    cy.get("#password").invoke("attr", "type", "text");
    cy.get("#password").type("     ");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password kí tự db
    cy.get("#password").clear();
    cy.get("#password").type("@@$$^$^");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password chu cai hoa
    cy.get("#password").clear();
    cy.get("#password").type("ABCabcd");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password 6 ki tu
    cy.get("#password").clear();
    cy.get("#password").type("abcdef");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password 7 ki tu
    cy.get("#password").clear();
    cy.get("#password").type("jCy8T86#5GXuh8H");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password not match
    cy.get("#confirm_password").invoke("attr", "type", "text");
    cy.get("#confirm_password").type("abcdefgh");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Password exact match
    cy.get("#confirm_password").clear();
    cy.get("#confirm_password").type("09232424242Q@uyen");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    // Email @ or .
    cy.get("#email").type("abcdefgh");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Email number
    cy.get("#email").clear();
    cy.get("#email").type("78247698232");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Email
    cy.get("#email").clear();
    cy.get("#email").type("abc@gmail.com");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Phone number ki tu db
    cy.get("#phone_number").type("@@@@@12453abc");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Phone number 9 so
    cy.get("#phone_number").clear();
    cy.get("#phone_number").type("123456789");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Phone number 11 so
    cy.get("#phone_number").clear();
    cy.get("#phone_number").type("12345678910");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Phone number 10 so có số 0 đầu
    cy.get("#phone_number").clear();
    cy.get("#phone_number").type("0908460204");
    cy.get(".base-button").click({ force: true });
    cy.wait(2000);

    //Checkbox
    cy.pause();
    cy.get(".register-form-main > .pb-30")
      .invoke("text", "Đăng ký thành công")
      .invoke("css", "color", "green")
      .invoke("css", "text-align", "center");

    cy.get(".base-button")
      .invoke("text", "Đăng nhập")
      .invoke("css", "color", "white")
      .invoke("css", "background-color", "green");
    cy.wait(2000);
    cy.get(".pt-4 > .main-color").click();

    /// Test Login
    
  });
});
