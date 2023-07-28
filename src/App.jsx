import './App.scss';
import { PostList } from './components/PostList/PostList';
import { getUserById } from './helpers/getUserById';
import { getCommentsById } from './helpers/getCommentsById';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const posts = postsFromServer.map((post) => {
    const { userId, id } = post;

    return (
      {
        ...post,
        user: getUserById(usersFromServer, userId),
        comments: getCommentsById(commentsFromServer, id),
      }
    );
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      {posts.length ? (
        <PostList posts={posts} />
      ) : (
        <p>No posts at this time</p>
      )}
    </section>
  );
};
