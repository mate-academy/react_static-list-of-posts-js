import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getFullPostsInfo(posts, commentsList, usersList) {
  return posts.map(post => {
    const user = usersList.find(u => u.id === post.userId);
    const comments = commentsList.filter(c => c.postId === post.id);
    return ({
      ...post,
      user,
      comments,
    });
  });
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={getFullPostsInfo(postsFromServer, commentsFromServer, usersFromServer)}/>
  </section>
);