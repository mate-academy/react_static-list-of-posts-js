import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsFromServer} />
    <CommentList comments={commentsFromServer} />
    <UserInfo user={usersFromServer} />
  </section>
);
