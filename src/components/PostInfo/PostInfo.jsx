import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = props => {
  const {
    post: { user, comments, title, body },
  } = props;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};
