/// <reference types="cypress" />

describe("online book store actions", () => {
    beforeEach(() => {
        cy.visit("https://books.toscrape.com/");
    });
    it("should be able to add to basket", () => {
        cy.get(
            ":nth-child(1) > .product_pod > .product_price > form > .btn"
        ).click();
    });

    it("should be able to go to the next page", () => {
        cy.get(".next > a").click();
    });

    it("should selet a book", () => {
        cy.get(":nth-child(1) > .product_pod > h3 > a").click();
        cy.get("h1").should("have.text", "A Light in the Attic");
    });
});
