import './App.scss';

import posts from './api/posts.json';
import allComments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList';

export function findRelatedData() {
  return posts.map((post) => {
    const copy = { ...post };

    copy.user = users.find(user => user.id === post.userId);
    copy.comments = allComments.filter(comment => comment.postId === post.id);

    return copy;
  });
}

export const fullPosts = findRelatedData();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={fullPosts}
    />
  </section>
);
