declare namespace Cypress {
    interface Chainable<Subject> {
        OpenMainPage(): void;
        OpenSetsPage(): void;
        CheckElementTextAndVisibility(locator: string, text: string): void;
        CheckElementRedirect(locator: string, expectedURL: string): void;
        CheckProductInBasket(addToBasketLocator: string): void;
        CheckMakeOrder(expectedURL: string): void;
        CheckEmptyBasket(): void;
        CheckElementClickable(locator: string): void;
        CheckElementExisting(locator: string): void;
        CheckEnterWithInvalidData(phone: string, password: string, text: string): void;
        CheckEnterWithoutData(text: string): void;
        CheckElementIsNotVisible(locator: string): void;
        CheckIncorrectText(locator: string, text: string): void;
        CheckElementIsNotSelected(locator: string): void;
        CheckElementIsNotExisting(locator: string): void;
    }
}