import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function preparePost(posts, users, comments) {
  return posts.map(post => {
    const user = users.find(u => u.id === post.userId);
    const postComments = comments.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={preparePost(postsFromServer, usersFromServer, commentsFromServer)}
    />
  </section>
);
