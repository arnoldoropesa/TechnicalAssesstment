describe('Launch Application', () => {
    it('Launch the test Application', () => {
        cy.visit('http://jupiter.cloud.planittesting.com')
    
    //Click Start Shopping to access products
    cy.get(".btn.btn-success.btn-large").click();

    //1. Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear
    cy.get("li[id='product-2'] a[class='btn btn-success']").click()
    cy.get("li[id='product-2'] a[class='btn btn-success']").click()

    cy.get("li[id='product-4'] a[class='btn btn-success']").click()
    cy.get("li[id='product-4'] a[class='btn btn-success']").click()
    cy.get("li[id='product-4'] a[class='btn btn-success']").click()
    cy.get("li[id='product-4'] a[class='btn btn-success']").click()
    cy.get("li[id='product-4'] a[class='btn btn-success']").click()
    
    cy.get("li[id='product-7'] a[class='btn btn-success']").click()
    cy.get("li[id='product-7'] a[class='btn btn-success']").click()
    cy.get("li[id='product-7'] a[class='btn btn-success']").click()

    //2. Go to the cart page
    cy.get("a[href='#/cart']").click()
})
    
})
    