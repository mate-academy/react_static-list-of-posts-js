import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const enrichedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(u => u.id === post.userId) || null,
  comments: commentsFromServer.filter(c => c.postId === post.id),
}));

export const App = () => <PostList posts={enrichedPosts} />;
