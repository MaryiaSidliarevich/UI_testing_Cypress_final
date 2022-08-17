import * as locators from "../locators/basketLocators";
import {orderURL} from "../fixtures/expectedURLs";

describe("Positive tests for checking not empty basket functionality", (): void => {

    beforeEach("Open page 'Сеты'", (): void => {
        cy.OpenSetsPage();
    });

    it("Assert product appears in the basket after adding and user redirects to order page after clicking to 'Оформить заказ' ", (): void => {
        cy.CheckProductInBasket(locators.addToCartButton);
        cy.CheckMakeOrder(orderURL);
    });
});