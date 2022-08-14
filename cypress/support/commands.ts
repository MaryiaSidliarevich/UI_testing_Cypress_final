import * as basketLocators from "../locators/basketLocators";
import * as enterLocators from "../locators/enterLocators";

Cypress.on('uncaught:exception', (): boolean => {
    return false;
});

Cypress.Commands.add("OpenMainPage", (): void => {
    cy.visit("/");
});

Cypress.Commands.add("OpenSetsPage", (): void => {
    cy.visit("catalog/sety/");
});

Cypress.Commands.add("CheckElementTextAndVisibility", (locator: string, text: string): void => {
    cy.get(locator).should("be.visible")
        .should("contain.text", text);
});

Cypress.Commands.add("CheckElementRedirect", (locator: string, expectedURL: string): void => {
    cy.get(locator).first().click();
    cy.url().should("equal", expectedURL);
});

Cypress.Commands.add("CheckProductInBasket", (addToBasketLocator: string): void => {
    cy.get(addToBasketLocator).first().click();
    cy.get(basketLocators.basketButton).click();
    cy.get(basketLocators.productInBasket).should("be.visible");
});

Cypress.Commands.add("CheckMakeOrder", (expectedURL: string): void => {
    cy.get(basketLocators.makeOrderButton).click();
    cy.url().should("equal", expectedURL);
});

Cypress.Commands.add("CheckEmptyBasket", (): void => {
    cy.get(basketLocators.basketButton).should("not.be.visible");
});

Cypress.Commands.add("CheckElementExisting", (locator: string): void => {
    expect(cy.get(locator)).exist;
});

Cypress.Commands.add("CheckElementClickable", (locator: string): void => {
    (cy.get(locator)).first().click();
});

Cypress.Commands.add("CheckEnterWithInvalidData", (phone: string, password: string, text:string): void => {
    cy.get(enterLocators.enterButton).click();
    cy.get(enterLocators.inputPhone).first().type(phone);
    cy.get(enterLocators.inputPassword).first().type(password);
    cy.get(enterLocators.submitButton).first().click();
    cy.get(enterLocators.errorMessage).first().should("have.text", text);
});

Cypress.Commands.add("CheckEnterWithoutData", (text:string): void => {
    cy.get(enterLocators.enterButton).click();
    cy.get(enterLocators.submitButton).first().click();
    cy.get(enterLocators.errorMessage).first().should("have.text", text);
});

Cypress.Commands.add("CheckElementIsNotVisible", (locator: string): void => {
    cy.get(locator).should("not.be.visible");
});

Cypress.Commands.add("CheckIncorrectText", (locator: string, text: string): void => {
    cy.get(locator).should("not.have.text", text);
});

Cypress.Commands.add("CheckElementIsNotSelected", (locator: string): void => {
    cy.get(locator).should("not.be.selected");
});

Cypress.Commands.add("CheckElementIsNotExisting", (locator: string): void => {
    (cy.get(locator)).should("not.exist");
});