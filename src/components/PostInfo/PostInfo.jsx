import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, user, comments, body } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments</p>
    )}
  </div>
);
