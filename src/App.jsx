import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => (
  <PostList
    key={postsFromServer.map(item => item.id)}
    postList={postsFromServer}
    users={usersFromServer}
    comments={commentsFromServer}
  />
);
