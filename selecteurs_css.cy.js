describe("Sélecteurs CSS", () => {
  before("URL", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.log("Arrivée sur le site démo Orange");

    // Login
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();

    //Vérifier l'arrivée sur le Dashboard
    cy.get(".oxd-topbar-header-title").contains("Dashboard");
    cy.log("Arrivée sur le Dashboard");
  });

  it("Différents types de sélecteurs", () => {
    // Sélecteurs basés sur les noms de balise
    cy.get("div");

    // Sélecteurs basés sur les classes
    cy.get(".oxd-main-menu");

    // Sélecteurs basés sur un nom de balise + une classe
    cy.get("div .oxd-main-menu");

    // Sélecteurs basés sur les identifiants
    cy.get("#app");

    // Sélecteurs basés sur les attributs
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-attendance-card-state"]',
    ).contains("Punched Out");

    // Sélecteurs basés sur les relations
    cy.get("div p");

    // Combinaison des sélecteurs
    cy.get(
      '[type="button"][class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]',
    );
  });
});
