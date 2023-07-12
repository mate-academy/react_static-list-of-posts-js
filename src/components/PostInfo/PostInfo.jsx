import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: { user, title, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    { comments.length > 0
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>
);
