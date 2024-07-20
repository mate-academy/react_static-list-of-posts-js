import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;
  const CommentLength =
    comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={comments} key={comments.id} />
    );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} key={user.id} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {CommentLength}
    </div>
  );
};
