import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, user, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}
        {user ? (
          <UserInfo user={user} key={user.id} />
        ) : (
          <b>Unknown</b>
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {!comments.length ? (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList comments={comments} />
    )}

  </div>
);
