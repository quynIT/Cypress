describe('NganLuong.vn Login Test', () => {
  it('Visits NganLuong.vn login page and enters login credentials', () => {
    // Bước 1: Điều hướng đến trang đăng nhập
    cy.visit('https://account.nganluong.vn/nganluong/login');

    // Bước 2: Điền thông tin đăng nhập
    cy.get('#loginform-email').type('...');
    cy.get('#loginform-password').type('...');

    cy.wait(20000);
    cy.get('.base-button').click();
  });
});