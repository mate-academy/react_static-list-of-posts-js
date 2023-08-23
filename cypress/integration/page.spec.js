/* eslint-disable max-len */

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain all the posts', () => {
    cy.get('.PostInfo').should('have.length', 21);
  });

  it('should rended posts in the correct order', () => {
    cy.get('.PostInfo__title').eq(0)
      .should('have.text', 'Solution🎀');

    cy.get('.PostInfo__title').eq(20)
      .should('have.text', 'aut amet sed');
  });

  it('should add corresponding users', () => {
    cy.get('.UserInfo').should('have.length', 21);
    cy.get('.UserInfo').eq(0).should('have.text', 'Polina Vafik');
    cy.get('.UserInfo').eq(20).should('have.text', 'Clementina DuBuque');
  });

  it('should add corresponding comments', () => {
    cy.get('.PostInfo').eq(1).find('.CommentInfo').should('have.length', 5);
    cy.get('.PostInfo').eq(2).find('.CommentInfo').should('not.exist');
    cy.get('.PostInfo').eq(3).find('.CommentInfo').should('have.length', 3);
  });
});
