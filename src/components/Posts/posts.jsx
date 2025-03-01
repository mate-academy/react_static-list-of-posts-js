const postsFromServer = [
  { id: 1, title: 'Post 1', body: 'Post body 1', userId: 1 },
  { id: 2, title: 'Post 2', body: 'Post body 2', userId: 2 },
  // Add more posts as needed
];

const usersFromServer = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more users as needed
];

const commentsFromServer = [
  { id: 1, postId: 1, body: 'Comment 1 for Post 1' },
  { id: 2, postId: 1, body: 'Comment 2 for Post 1' },
  { id: 3, postId: 2, body: 'Comment 1 for Post 2' },
  // Add more comments as needed
];

// Attach users and comments to posts
const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));
