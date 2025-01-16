// src/App.jsx
import PostList from './components/PostList';
import './App.scss';

const posts = require('./api/posts.json');

const App = () => {
  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
};

export default App;
