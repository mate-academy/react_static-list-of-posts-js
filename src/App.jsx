import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer.map(post => {
  const comments = commentsFromServer.filter(comment => {
    if (post.id === comment.postId) {
      return true;
    }

    return false;
  });

  const user = usersFromServer.find(usr => {
    if (usr.id === post.userId) {
      return true;
    }

    return false;
  })


  return {
    ...post,
    comments: [...comments],
    user: { ...user },
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
