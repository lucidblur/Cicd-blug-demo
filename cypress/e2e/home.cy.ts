describe("The Home Page", () => {
  it("loads", () => {
    cy.visit("/");
  });

  describe("The Hobbies Page", () => {
  it("loads", () => {
    cy.visit("/hobbies");
  });
});
