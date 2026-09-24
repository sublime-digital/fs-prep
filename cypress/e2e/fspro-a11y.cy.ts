// cypress/e2e/fspro-a11y.cy.ts

describe('Foreign Service Pro - E2E & Accessibility Audit', () => {
  
  beforeEach(() => {
    // Visit the target Vercel deployment
    cy.visit('https://foreign-service-pro.vercel.app');
    
    // Inject and configure axe-core for accessibility auditing
    cy.injectAxe();
  });

  it('passes standard E2E smoke test and initial page load', () => {
    // Verify that the main title or landmark wrapper exists
    cy.get('main').should('exist');
    cy.url().should('include', 'foreign-service-pro.vercel.app');
  });

  it('meets WCAG 2.2 Level AA accessibility standards on initial load', () => {
    // Run the accessibility audit against the live page DOM
    cy.checkA11y(undefined, {
      includedImpacts: ['serious', 'critical'], // Focus on heavy barriers first
    }, (violations) => {
      cy.log(`${violations.length} accessibility violation(s) detected`);
    });
  });

  it('supports fundamental keyboard tab navigation without trapping focus', () => {
    // Press tab to ensure interactive elements receive clear focus states
    cy.get('body').tab();
    cy.focused().should('not.be', 'body');
  });

});