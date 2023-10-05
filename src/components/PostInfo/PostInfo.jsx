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

  const areComments = comments.length > 0;

  const noComments = (
    <>
      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  const existingComments = areComments
    ? <CommentList comments={comments} />
    : noComments;

  return (
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

      {existingComments}
    </div>
  );
};
