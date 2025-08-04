import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;

export { UserInfo } from './components/UserInfo';
export { PostList } from './components/PostList';
export { PostInfo } from './components/PostInfo';
export { CommentList } from './components/CommentList';
export { CommentInfo } from './components/CommentInfo';
