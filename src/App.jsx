import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import './components/PostList/PostList.scss';

import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsForPost(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={preparedPosts} />
    </div>
  </section>
);
