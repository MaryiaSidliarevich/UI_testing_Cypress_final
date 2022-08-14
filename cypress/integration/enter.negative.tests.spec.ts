import * as values from "../fixtures/inputValues";
import {errorText} from "../fixtures/expectedValues";

describe("Negative tests for checking enter functionality with invalid data", (): void => {

    beforeEach("Open the main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert error message 'Неверный телефон или пароль' is displayed if user enters invalid data", (): void => {
        cy.CheckEnterWithInvalidData(values.phoneNumber, values.password, errorText);
    });
});

describe("Negative tests for checking enter functionality without any data", (): void => {

    beforeEach("Open the main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert error message 'Неверный телефон или пароль' is displayed if user doesn't enter any data", (): void => {
        cy.CheckEnterWithoutData(errorText);
    });
});