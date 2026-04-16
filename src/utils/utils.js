export function getCommentsForPost(post, comments) {
  return comments.filter(comment => comment.postId === post.id);
}

export function getUserForPost(post, users) {
  return users.find(user => user.id === post.userId);
}
