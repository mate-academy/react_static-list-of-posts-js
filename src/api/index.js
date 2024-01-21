import commentsFromServer from './comments.json';
import usersFromServer from './users.json';
import postsFromServer from './posts.json';

export function findUser(id) {
  return usersFromServer.find(user => user.id === id);
}

export function findComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
        || null;
}

export function findPosts() {
  return postsFromServer.map(post => ({
    ...post,
    user: findUser(post.userId),
    comments: findComments(post.id),
  }));
}
