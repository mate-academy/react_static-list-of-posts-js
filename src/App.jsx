import './App.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);

  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
