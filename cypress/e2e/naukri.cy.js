describe("naukri LogIn", ()=>{
    it("google login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        /* ==== Generated with Cypress Studio ==== */
        
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('orangeHrm', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.oxd-sheet > :nth-child(1)').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('Admin');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get('.oxd-sheet > :nth-child(2)').click();
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('admin123');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-icon').click();
     
        
        
        
        
        
    });
})