import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const preparedPosts = postsFromServer.map((post) => {
  const getUser = users => users.find(author => author.id === post.userId);
  const getComments = comments => comments.filter(({ postId }) => (
    postId === post.id
  ));

  return {
    ...post,
    user: getUser(usersFromServer),
    comments: getComments(commentsFromServer),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
