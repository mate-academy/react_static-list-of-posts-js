import postsFromServer from './posts.json';
import { getUser } from './getUser';
import { getComment } from './getComment';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));
