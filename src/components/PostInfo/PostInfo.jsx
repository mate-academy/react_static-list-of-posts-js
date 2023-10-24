import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (

    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />
      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </article>
  );
};
