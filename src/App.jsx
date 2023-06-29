import './App.scss';

import posts from './api/posts.json';
import allComments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const getRelatedData = () => posts.map((post) => {
  const newPost = { ...post };

  newPost.user = users.find(user => user.id === post.userId);
  newPost.comments = allComments.filter(comment => comment.postId === post.id);

  return newPost;
});

export const newPosts = getRelatedData();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      newPosts={newPosts}
    />
  </section>
);
