import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function groupData(posts, commen, users) {
  return posts.map(post => {
    const comments = commen.filter(comment => post.id === comment.postId);
    const user = users.find(u => post.userId === u.id);

    return {
      ...post,
      comments,
      user,
    };
  });
}

const fullPostData = groupData(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList data={fullPostData} />
  </section>
);
