import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';
// console.log(postsFromServer);
// console.log(commentsFromServer);
// console.log(usersFromServer);

const posts = postsFromServer.map((post) => {
  const user = usersFromServer.find(person => person.id === post.userId);

  const comments = commentsFromServer.filter(
    coment => post.id === coment.postId,
  );

  return ({
    ...post, user, comments,
  });
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
