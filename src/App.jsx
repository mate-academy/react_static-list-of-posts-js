import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// userWithPosts: {
//   email: string
//   id: number,
//   name: string,
//   posts: [{
//     id: number,
//     userId: number,
//     title: string,
//     body: string,
//     comments: [{ comment1, comment2, ..., comment }]
//   }, ...],
//   username: string,
// }

// comment: {
//   name: string,
//   email: string,
//   id: number,
//   postId: number,
//   body: string,
// }

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      postsFromServer={postsFromServer}
      commentsFromServer={commentsFromServer}
      usersFromServer={usersFromServer}
    />
  </section>
);
