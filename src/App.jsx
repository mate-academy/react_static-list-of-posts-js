/* eslint-disable max-len */

import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';

const usersFromServer = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
  { id: 2, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org' },
];

const commentsFromServer = [
  {
    id: 1,
    postId: 2,
    name: 'pariatur omnis in',
    email: 'Telly_Lynch@karl.co.uk',
    body: 'dolorum voluptas laboriosam quisquam ab totam beatae et aut aliquid optio assumenda voluptas velit itaque quidem voluptatem tempore cupiditate in itaque sit molestiae minus dolores magni',
  },
  {
    id: 2,
    postId: 2,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
  },
];

const postsFromServer = [
  {
    id: 1,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    userId: 1,
  },
  {
    id: 2,
    title: 'doloremque illum aliquid sunt',
    body: 'deserunt eos nobis asperiores et hic est debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates et aut adipisci ea maiores voluptas maxime',
    userId: 2,
  },
];

const posts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const comments = commentsFromServer.filter(c => c.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
