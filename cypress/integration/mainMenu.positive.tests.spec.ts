import * as locators from "../locators/mainMenuLocators";
import * as expectedValues from "../fixtures/expectedValues";
import * as expectedURLs from "../fixtures/expectedURLs";

describe("Positive tests for checking elements in the main menu", () => {

    beforeEach("Open main page",(): void => {
        cy.OpenMainPage();
    });

    it("Assert all elements in the main menu are visible and have correct text", (): void => {
        cy.CheckElementTextAndVisibility(locators.sets, expectedValues.setsText);
        cy.CheckElementTextAndVisibility(locators.souses, expectedValues.sousesText);
        cy.CheckElementTextAndVisibility(locators.drinks, expectedValues.drinksText);
        cy.CheckElementTextAndVisibility(locators.wok, expectedValues.wokText);
        cy.CheckElementTextAndVisibility(locators.desserts, expectedValues.dessertsText);
        cy.CheckElementTextAndVisibility(locators.hotDishes, expectedValues.hotDishesText);
        cy.CheckElementTextAndVisibility(locators.lunchMenu, expectedValues.lunchMenuText);
        cy.CheckElementTextAndVisibility(locators.sushi, expectedValues.sushiText);
        cy.CheckElementTextAndVisibility(locators.wokConstructor, expectedValues.wokConstructorText);
    });

    it("Assert element 'Сеты' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.sets, expectedURLs.setsURL);
    });

    it("Assert element 'Соусы и гарнир' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.souses, expectedURLs.sousesURL);
    });

    it("Assert element 'Сеты' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.drinks, expectedURLs.drinksURL);
    });

    it("Assert element 'WOK' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.wok, expectedURLs.wokURL);
    });

    it("Assert element 'Десерты' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.desserts, expectedURLs.dessertsURL);
    });

    it("Assert element 'Горячее и салаты' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.hotDishes, expectedURLs.hotDishesURL);
    });

    it("Assert element 'Ланч-меню' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.lunchMenu, expectedURLs.lunchMenuURL);
    });

    it("Assert element 'Суши и роллы' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.sushi, expectedURLs.sushiURL);
    });

    it("Assert element 'WOK Конструктор' in the main menu redirects to the correct page", (): void => {
        cy.CheckElementRedirect(locators.wokConstructor, expectedURLs.wokConstructorURL);
    });
});