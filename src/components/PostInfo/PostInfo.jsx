import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post: { title, user, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        <span>Posted by</span>

        {user && (
          <UserInfo user={user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments && comments.length > 0
      ? (<CommentList comments={comments} />)
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        </>
      )
    }
  </div>
);
