import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const combinePosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(person => person.id === post.userId),
  comments: commentsFromServer.filter(coments => coments.postId === post.id),
}));

export const App = ({ list }) => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList list={combinePosts} />
  </section>
);
