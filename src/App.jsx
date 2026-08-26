import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getPosts(postsBase, commentsBase, usersBase) {
  const posts = postsBase.map(post => {
    const user = usersBase.find(userItem => userItem.id === post.userId);
    const comments = commentsBase.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user,
      comments,
    };
  });

  return posts;
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={getPosts(postsFromServer, commentsFromServer, usersFromServer)}
    />
  </section>
);
