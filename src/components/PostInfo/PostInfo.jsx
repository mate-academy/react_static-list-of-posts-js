import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {comments === undefined || comments.length < 1 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comms={comments} />
    )}
  </div>
);
