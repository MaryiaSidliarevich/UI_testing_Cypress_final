/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
}

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};