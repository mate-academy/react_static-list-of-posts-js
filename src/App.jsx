import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const preparePosts = (posts, cmnts, users) => (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: cmnts.filter(comment => comment.postId === post.id),
  }))
);

export const App = () => {
  const preparedPosts = preparePosts(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </section>
  );
};
