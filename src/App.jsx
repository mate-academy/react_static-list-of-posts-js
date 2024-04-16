import './App.scss';

// delete after
import './components/CommentInfo/CommentInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList/PostList';
import usersFromServer from './api/users.json';

function getUserById(postUserId) {
  return usersFromServer.find(user => user.id === postUserId);
}

function commentsForPost(commentId) {
  return commentsFromServer.filter(comment => comment.postId === commentId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: commentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
