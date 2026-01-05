import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(post) {
  return usersFromServer.find(user => post.userId === user.id);
}

function getComments(post) {
  return commentsFromServer.filter(comment => comment.postId === post.id);
}

function getReadyPosts() {
  const readyPosts = postsFromServer.map(post => ({
    ...post,
    user: getUserById(post),
    comments: getComments(post),
  }));

  return readyPosts;
}

const posts = getReadyPosts();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
