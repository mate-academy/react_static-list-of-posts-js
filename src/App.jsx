import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getById(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || null;
}

const postsWizComments = postsFromServer.map(post => (
  { ...post,
    comments: getById(post.id) }
));

function getUserById(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

const userPostComments = postsWizComments.map(postcomment => (
  { ...postcomment,
    users: getUserById(postcomment.userId) }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList
        userPostComments={userPostComments}
      />
    </div>
  </section>
);
