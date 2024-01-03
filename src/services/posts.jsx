import postsFromServer from '../api/posts.json';
import { getUserById } from './getUserById';
import { getCommentsById } from './getCommentsById';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));
