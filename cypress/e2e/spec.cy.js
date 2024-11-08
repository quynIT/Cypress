describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://github.com/login");
    cy.get("#login_field").type("email-sai@example.com");

    // Nhập mật khẩu không hợp lệ
    cy.get("#password").type("matkhau-sai");

    // Nhấn nút Đăng nhập
    cy.get('input[name="commit"]').click();

    // Xác thực nếu có thông báo lỗi xuất hiện
    cy.contains("Incorrect username or password.").should("be.visible");
    cy.pause();
  });
});
