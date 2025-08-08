import './App.scss';

// import postsFromServer from './api/posts.json';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

import posts from './api/posts.json';
import users from './api/users.json';
import comments from './api/comments.json';

import PostList from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) ?? null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

function App() {
  return (
    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  );
}

export default App;
