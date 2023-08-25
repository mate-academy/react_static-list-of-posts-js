import './PostList.scss';
import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import { PostInfo } from '../PostInfo';

const posts = postsFromServer.map(post => (
  {
    ...post,
    user: findUserById(post.userId),
    comments: filterCommentsByPostId(post.id),
  }
));

function findUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function filterCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const PostList = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
