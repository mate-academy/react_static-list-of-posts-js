describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve conter todas as postagens', () => {
    cy.get('.PostInfo').should('have.length.greaterThan', 0);
  });

  it('deve renderizar as postagens na ordem correta', () => {
    cy.get('.PostInfo').each(post => {
      cy.wrap(post).find('.PostInfo__title').should('not.be.empty');
    });
  });

  it('deve adicionar os usuários correspondentes', () => {
    cy.get('.UserInfo').should('exist');
  });

  it('deve adicionar os comentários correspondentes', () => {
    cy.get('.CommentList').should('exist');
  });
});
