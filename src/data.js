export const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

export const comments = [
  { id: 1, postId: 1, body: 'Great post!' },
  { id: 2, postId: 1, body: 'Thanks for sharing.' },
  { id: 3, postId: 2, body: 'Interesting read.' },
];

export const posts = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the first post.',
    user: users[0],
    comments: comments.filter(c => c.postId === 1),
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'This is the second post.',
    user: users[1],
    comments: comments.filter(c => c.postId === 2),
  },
];