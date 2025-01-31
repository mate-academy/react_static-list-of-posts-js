import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const mergedData = postsFromServer.map(post => {
  return {
    ...post,
    user: usersFromServer.find(user => user.id === post.userId) || {},
    comments: commentsFromServer
      .filter(comment => comment.postId === post.id)
      .map(comment => {
        return {
          ...comment,
          user:
            usersFromServer.find(user => user.email === comment.email) || {},
        };
      }),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={mergedData} />
  </section>
);
