import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  if (!post) {
    return null;
  }

  const { title, body, user, comments } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </article>
  );
};
