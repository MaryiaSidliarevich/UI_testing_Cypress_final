import * as locators from "../locators/mainPageLocators";
import {unistarText} from "../fixtures/expectedValues";

describe("Negative tests for checking elements on the main page", () => {

    beforeEach("Open main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert element 'ЭФИР UNISTAR' doesn't contain text 'РАДИО'", (): void => {
        cy.CheckIncorrectText(locators.unistar, unistarText);
    });
});

describe("Negative tests for checking gifts functionality", () => {

    beforeEach("Open main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert gifts in gifts list are clickable", (): void => {
        cy.CheckElementClickable(locators.giftButton);
        cy.CheckElementClickable(locators.firstGift);
        cy.CheckElementClickable(locators.secondGift);
        cy.CheckElementClickable(locators.thirdGift);
    });

    it("Assert gifts in gifts list cannot be selected for user with empty basket", (): void => {
        cy.CheckElementClickable(locators.giftButton);
        cy.CheckElementIsNotSelected(locators.firstGift);
        cy.CheckElementIsNotSelected(locators.secondGift);
        cy.CheckElementIsNotSelected(locators.thirdGift);
    });
});