import './App.scss';

import posts from './api/posts.json';
import users from './api/users.json';
import comments from './api/comments.json';


import { PostInfo } from './components/PostInfo/PostInfo';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      {preparedPosts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  </section>
);
