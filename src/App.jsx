import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const findUser = (users, userId) => {
  return users.find(user => user.id === userId);
};

const findComments = (comments, postId) => {
  return comments.filter(comment => comment.postId === postId);
};

const groupPosts = (users, posts, comments) => {
  return posts.map(post => {
    return {
      ...post,
      user: findUser(users, post.userId),
      comments: findComments(comments, post.id),
    };
  });
};

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={groupPosts(usersFromServer, postsFromServer, commentsFromServer)}
    />
  </section>
);
