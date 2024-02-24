describe('Books of Orwell', function () {
    it('front page can be opened', function () {
        cy.visit('http://localhost:5000')
        cy.contains('George Orwell')
        cy.contains('English novelist')
    })

    it('page of a particular book can be navigated from the main page', function () {
        cy.visit('http://localhost:5000')
        cy.get('a').contains('Animal Farm').click()
        cy.contains('Totalitarianism')
    })
})
