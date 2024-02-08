import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        {title && (
          <h3 className="PostInfo__title">{title}</h3>
        )}
        <p>
          {' Posted by '}
          {user ? <UserInfo user={user} /> : 'Unknown User'}
        </p>
      </div>
      <p className="PostInfo__body">{body}</p>
      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
