import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparedPosts = postsFromServer.map(post => {
  const userForPost = usersFromServer.find(user => user.id === post.userId);

  const commentsForPost = commentsFromServer
    .filter(comment => comment.postId === post.id)
    .map(comment => {
      const userForComment = usersFromServer.find(
        user => user.id === comment.userId,
      );

      return { ...comment, user: userForComment };
    });

  return {
    ...post,
    user: userForPost,
    comments: commentsForPost,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
//
