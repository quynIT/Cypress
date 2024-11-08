describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://formspree.io/login");
    cy.get(".fvmeZf").click();
    // Xác thực nếu có thông báo lỗi xuất hiện
    cy.contains("Incorrect username or password.").should("be.visible");
    cy.pause();
  });
});
