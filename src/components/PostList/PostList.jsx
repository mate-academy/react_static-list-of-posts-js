import { PostInfo } from '../PostInfo';
import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

function getUserByPostId(id) {
  const arr = [];

  commentsFromServer.filter((elem) => {
    if (elem.postId === id) {
      arr.push(elem);
    }

    return elem;
  });

  return arr;
}

function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
}));

const postsUpdate = posts.map((elem) => {
  const valueElem = elem;

  valueElem.comments = getUserByPostId(elem.id);

  return elem;
});

export const PostList = () => (
  <ul className="PostList">
    {postsUpdate.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
