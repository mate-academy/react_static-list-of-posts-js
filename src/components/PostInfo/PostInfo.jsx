import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{body}</p>

      {post.comments.length === 0 ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>{' '}
        </>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
