import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUser = (users, post) => {
  return users.find(user => {
    return user.id === post.userId;
  });
};

const findComments = (comments, post) => {
  return comments.filter(comment => {
    return comment.postId === post.id;
  });
};

const makePosts = posts => {
  return posts.map(post => {
    return {
      ...post,
      user: findUser(usersFromServer, post),
      comments: findComments(commentsFromServer, post),
    };
  });
};

const posts = makePosts(postsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
