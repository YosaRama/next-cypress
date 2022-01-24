/// <reference types="cypress" />
import { v4 as uuid } from "uuid";

describe("Sign Up", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/signup");
  });

  it("should successfully registration", () => {
    cy.url().should("include", "/signup");

    cy.get("#front_name").type("yosa");
    cy.get("#last_name").type("rama");
    cy.get("#email").type(`${uuid()}@gmail.com`);
    cy.get("#password").type("asdf1234");
    cy.get("#phone_number").type("0238478");
    cy.get(".comp-defaultButton", { timeout: 1 * 8000 }).click();
    cy.url({ timeout: 1 * 8000 }).should("include", "/verification");
    cy.contains("Please verify your account").should("exist");
  });

  it("should failed registration when user exist", () => {
    cy.url().should("include", "/signup");

    cy.get("#front_name").type("yosa");
    cy.get("#last_name").type("rama");
    cy.get("#email").type("yosarama07@gmail.com");
    cy.get("#password").type("asdf1234");
    cy.get("#phone_number").type("0238478");
    cy.get(".comp-defaultButton", { timeout: 1 * 8000 }).click();
    cy.contains("Error").should("exist");
  });
});
