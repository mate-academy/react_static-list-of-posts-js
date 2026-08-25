import { mount } from '@cypress/react18';
import { CommentList } from './CommentList';

describe('CommentList component', () => {
  describe('', () => {
    beforeEach(() => {
      const comments = [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: [
            'laudantium enim quasi est quidem magnam voluptate ipsam eos',
            'tempora quo necessitatibus',
            'dolor quam autem quasi',
            'reiciendis et nam sapiente accusantium',
          ].join('\n'),
        },
        {
          postId: 1,
          id: 2,
          name: 'quo vero reiciendis velit similique earum',
          email: 'Jayne_Kuhic@sydney.com',
          body: [
            'est natus enim nihil est dolore omnis voluptatem numquam',
            'et omnis occaecati quod ullam at',
            'voluptatem error expedita pariatur',
            'nihil sint nostrum voluptatem reiciendis et',
          ].join('\n'),
        },
        {
          postId: 1,
          id: 3,
          name: 'odio adipisci rerum aut animi',
          email: 'Nikita@garfield.biz',
          body: [
            'quia molestiae reprehenderit quasi aspernatur',
            'aut expedita occaecati aliquam eveniet laudantium',
            'omnis quibusdam delectus saepe quia accusamus maiores nam est',
            'cum et ducimus et vero voluptates excepturi deleniti ratione',
          ].join('\n'),
        },
        {
          postId: 1,
          id: 4,
          name: 'alias odio sit',
          email: 'Lew@alysha.tv',
          body: [
            'non et atque',
            'occaecati deserunt quas accusantium unde odit nobis qui',
            'voluptatem',
            'quia voluptas consequuntur itaque dolor',
            'et qui rerum deleniti ut occaecati',
          ].join('\n'),
        },
      ];

      mount(<CommentList comments={comments} />);
    });

    it('should contain all comments', () => {
      cy.get('.CommentInfo').should('have.length', 4);
    });

    it('should render comments in correct order', () => {
      cy.get('.CommentInfo__name')
        .eq(0)
        .should('have.text', 'id labore ex et quam laborum');

      cy.get('.CommentInfo__name').eq(3).should('have.text', 'alias odio sit');
    });
  });

  describe('', () => {
    it('should not have comments if received an empty array', () => {
      mount(<CommentList comments={[]} />);

      cy.get('.CommentInfo').should('not.exist');
    });
  });
});
