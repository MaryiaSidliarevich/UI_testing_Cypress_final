import * as locators from "../locators/basketLocators";
import {orderURL} from "../fixtures/expectedURLs";

describe("Positive tests for checking not empty basket functionality", (): void => {

    beforeEach("Open page 'Сеты'", (): void => {
        cy.OpenSetsPage();
    });

    it("Assert product appears in the basket after adding", (): void => {
        cy.CheckProductInBasket(locators.addToCartButton);
    });

    it("Assert user redirects to order page after adding product to the basket and clicking to 'Оформить заказ'", (): void => {
        cy.CheckProductInBasket(locators.addToCartButton);
        cy.CheckMakeOrder(orderURL);
    });
});