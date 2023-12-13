import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { comments, title, user, body } = post;
  const comment = comments.length !== 0
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
  const userInfo = user !== null
    && (
      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {userInfo}
      {comment}
    </div>
  );
};
