describe("Login", () => {
    beforeEach(() => {
      cy.visit("https://www.nganluong.vn/vn/home.html");
      cy.get('.account-link').click();
    });

    it("Leave all null?", () => {
        cy.get("#loginform-email").focus().blur();
        cy.get("#loginform-password").focus().blur();
        cy.get('.base-button').click(); 
        cy.contains('Email không được để trống.').should('be.visible');
        cy.contains('Mật khẩu không được để trống.').should('be.visible');
    })

    it("Leave email null?", () => {
        cy.get("#loginform-email").focus().blur();
        cy.get("#loginform-password").type('Tieuthu*').blur();
        
        cy.contains('Email không được để trống.').should('be.visible');
        cy.contains('Mật khẩu không được để trống.').should('not.exist');
        cy.get('.base-button').should('be.disabled'); 
    })

    it("Leave password null?", () => {
        cy.get("#loginform-email").type('Nguyenngoctieuthu2207@gmail.com').blur();
        cy.get("#loginform-password").focus().blur();
        
        cy.contains('Email không được để trống.').should('not.exist');
        cy.contains('Mật khẩu không được để trống.').should('be.visible');
        cy.get('.base-button').should('be.disabled')
    })

    it("Not tick captcha?", () => {
        cy.get("#loginform-email").type('Nguyenngoctieuthu@gmail.com').blur();
        cy.get("#loginform-password").type('Tieuthu*').blur();
        cy.get('.base-button').click();
        cy.contains('Mã xác thực không đúng.').should('be.visible');
    })

    it("Tick captcha?", () => {
        cy.get("#loginform-email").type('Nguyenngoctieuthu@gmail.com').blur();
        cy.get("#loginform-password").type('Tieuthu*').blur();
        cy.wait(10000);
        cy.get('.base-button').click();
        cy.contains('Tài khoản hoặc mật khẩu không chính xác').should('be.visible');
    })

    it.only("Pass and email are matched but not tick captcha?", () => {
        cy.get("#loginform-email").type('Nguyenngoctieuthu2207@gmail.com').blur();
        cy.get("#loginform-password").type('Tieuthu*').blur();
        cy.get('.base-button').click();
        cy.contains('Mã xác thực không đúng.').should('be.visible');
    })

    it("Successful Login?", () => {
        cy.get("#loginform-email").type('Nguyenngoctieuthu2207@gmail.com').blur();
        cy.get("#loginform-password").type('Tieuthu*').blur();
        cy.wait(10000);
        cy.get('.base-button').click();
    })

    
})

