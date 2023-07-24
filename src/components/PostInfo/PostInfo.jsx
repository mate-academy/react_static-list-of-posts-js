import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post:
  { user: { name, email }, title, body, comments } }) => (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>

          <UserInfo name={name} email={email} />
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        {comments.length === 0 ? (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        ) : (
          <CommentList comments={comments} />
        )}
      </div>
    </>
);
