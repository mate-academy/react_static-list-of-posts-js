import './App.scss';
import { PostList } from './components/PostList';

// import postsFromServer from './api/posts.json';
import postsFromServer from './api/posts.json';

// import commentsFromServer from './api/comments.json';
import commentsFromServer from './api/comments.json';

// import usersFromServer from './api/users.json';
import usersFromServer from './api/users.json';

export function getUserById(id) {
  return usersFromServer.find(user => user.id === id);
}

export function getCommentsById(postId) {
  const comments = commentsFromServer
    .reduce((prev, comment) => {
      if (comment.postId === postId) {
        return [...prev, comment];
      }

      return [...prev];
    }, []);

  return comments;
}

export const posts = postsFromServer.map(post => (
  {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
