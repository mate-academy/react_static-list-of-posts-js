import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function addCommentsAndUsers(postsObjs, usersObjs, commentsObjs) {
  return postsObjs.map(post => {
    const addUser = usersObjs.find(user => post.userId === user.id);
    const addComments = commentsObjs.filter(
      comment => post.id === comment.postId,
    );

    return {
      ...post,
      user: addUser,
      comments: addComments,
    };
  });
}

const posts = addCommentsAndUsers(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
