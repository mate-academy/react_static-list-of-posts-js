import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList/CommentList';
import { CommentInfo } from './components/CommentInfo/CommentInfo';
import { PostInfo } from './components/PostInfo/PostInfo';

const xpPosts = (posts, users, comments) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts = xpPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
    <PostInfo post={preparedPosts[0]} />
    <CommentList comments={commentsFromServer} />
    <CommentInfo comment={commentsFromServer[0]} />
  </section>
);

export default App;
