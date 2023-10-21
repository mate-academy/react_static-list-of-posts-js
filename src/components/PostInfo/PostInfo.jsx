import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}
          {
            user
              ? <UserInfo user={user} />
              : <b className="PostInfo__userAnonymous">The user is anonymous</b>
          }
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length > 0
          ? <CommentList comments={comments} />
          : (
            <>
              <hr />
              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
      }
    </div>
  );
};
