export const getUserById = (users, userId) => (
  users.find(user => user.id === userId) || null
);
