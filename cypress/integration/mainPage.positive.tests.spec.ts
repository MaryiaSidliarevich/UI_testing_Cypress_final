import * as locators from "../locators/mainPageLocators";

describe("Positive tests for checking social media elements on the main page", () => {

    beforeEach("Open the main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert social media elements at the bottom of the page are exist", (): void => {
        cy.CheckElementExisting(locators.fb);
        cy.CheckElementExisting(locators.tw);
        cy.CheckElementExisting(locators.ok);
        cy.CheckElementExisting(locators.vk);
    });

    it("Assert social media elements at the bottom of the page are clickable", (): void => {
        cy.CheckElementClickable(locators.fb);
    });

    it("Assert social media elements at the bottom of the page are clickable", (): void => {
        cy.CheckElementClickable(locators.tw);
    });

    it("Assert social media elements at the bottom of the page are clickable", (): void => {
        cy.CheckElementClickable(locators.ok);
    });

    it("Assert social media elements at the bottom of the page are clickable", (): void => {
        cy.CheckElementClickable(locators.vk);
    });
});