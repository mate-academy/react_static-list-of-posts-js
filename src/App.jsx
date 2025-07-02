import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparePosts = (posts, users, comments) =>
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

export const App = () => {
  const preparedPosts = preparePosts(
    postsFromServer,
    usersFromServer,
    commentsFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={preparedPosts} />
    </section>
  );
};
