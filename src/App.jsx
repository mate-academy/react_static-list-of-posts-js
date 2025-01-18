import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUser(userId) {
  return usersFromServer.find(user => userId === user.id);
}

const postList = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
  };
});

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList postList={postList} commentsList={commentsFromServer} />
    </section>
  );
};
