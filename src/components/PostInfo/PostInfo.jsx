import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
// import usersFromServer from '../../api/users.json';
// import commentsFromServer from '../../api/comments.json';
import './PostInfo.scss';

// function getUserById(userId) {
//   return usersFromServer.find(user => user.id === userId) || null;
// }

// function getCommentsById(postId) {
//   return commentsFromServer.filter(comment => comment.postId === postId);
// }

export const PostInfo = ({ post }) => (
  <div className="PostInfo ">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        Posted by <UserInfo user={post.user} key={post.userId} />
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
