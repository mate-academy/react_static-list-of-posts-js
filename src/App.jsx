import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';



const normalizedPosts = postsFromServer.map(post => (
  {...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
    user: usersFromServer.find(user => post.userId === user.id
    )}))



export const App = () => (
  <section className="App">

    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={normalizedPosts} />
  </section>
);


