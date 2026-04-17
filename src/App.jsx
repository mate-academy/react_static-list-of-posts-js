import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const usersById = usersFromServer.reduce(
  (users, user) => ({
    ...users,
    [user.id]: user,
  }),
  {},
);

const commentsByPostId = commentsFromServer.reduce(
  (comments, comment) => ({
    ...comments,
    [comment.postId]: [...(comments[comment.postId] || []), comment],
  }),
  {},
);

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersById[post.userId],
  comments: commentsByPostId[post.id] || [],
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
