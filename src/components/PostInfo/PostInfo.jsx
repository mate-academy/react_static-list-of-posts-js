import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({
  post: {
    title,
    user,
    body,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <UserInfo user={user} key={user.id} />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>
    {comments.length !== 0
      ? <CommentList comments={comments} key={comments.id} />
      : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )

    }
  </div>
);
