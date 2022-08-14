describe("Negative tests for checking empty basket functionality", (): void => {

    beforeEach("Open page 'Сеты'", (): void => {
        cy.OpenSetsPage();
    });

    it("Assert empty basket is not available for user", (): void => {
        cy.CheckEmptyBasket();
    });
});