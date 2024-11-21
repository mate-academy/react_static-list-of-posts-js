import './App.scss';
import './components/CommentList/CommentList.scss';
import './components/UserInfo/UserInfo.scss';
import './components/PostInfo/PostInfo.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUserById = (users, userId) => users.find(user => user.id === userId);
const filterCommentsByPostId = (comments, postId) =>
  comments.filter(comment => comment.postId === postId);
const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(usersFromServer, post.userId),
  comments: filterCommentsByPostId(commentsFromServer, post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
