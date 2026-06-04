import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const { user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
      </div>

      <p>
        {' Posted by '}
        {user && <UserInfo user={user} />}
      </p>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {comments?.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
