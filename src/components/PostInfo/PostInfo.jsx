import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />
        <p className="PostInfo__body">{body}</p>
        <hr />
        {
          comments.length !== 0
            ? <CommentList comments={comments} />
            : <b data-cy="NoCommentsMessage">No comments yet</b>
        }
      </div>
    </article>
  );
};
