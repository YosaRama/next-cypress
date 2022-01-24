/// <reference types="cypress" />

describe("Homepage", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://bestbitesuae.dev.engineroomglobal.com/");
  });

  it("should open homepage", () => {
    cy.contains("What are you in the mood for?", { timeout: 1 * 8000 }).should(
      "exist"
    );
    cy.contains("Sign up", { timeout: 1 * 8000 }).click();
    cy.url().should("include", "/signup");
    cy.get("#front_name").type("yosa");
    cy.get("#last_name").type("rama");
    cy.get("#email").type("yosarama07@gmail.com");
    cy.get("#password").type("asdf1234");
    cy.get("#phone_number").type("0238478");
    cy.get(".comp-defaultButton").click();
  });
});
