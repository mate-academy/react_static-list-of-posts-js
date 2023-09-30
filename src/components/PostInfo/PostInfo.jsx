import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { comments, title, body, user } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        <span className="PostInfo__userName">
          Posted by
        </span>

        {user && (
          <UserInfo user={user} />)}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
