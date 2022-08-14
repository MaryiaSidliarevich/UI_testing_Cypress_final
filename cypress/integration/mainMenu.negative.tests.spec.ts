import * as locators from "../locators/mainMenuLocators";

describe("Negative tests for checking elements in the main menu", () => {

    beforeEach("Open main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert section 'Еще' is not visible in the main menu with viewport 1260x1080", (): void => {
        cy.CheckElementIsNotVisible(locators.more);
    });

    it("Assert section 'Рыба' doesn't exist in the main menu", (): void => {
        cy.CheckElementIsNotExisting(locators.fish);
    });
});
