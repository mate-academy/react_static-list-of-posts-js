import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {'Posted by '}
          <a className="UserInfo" href={`mailto:${user?.email}`}>
            {user?.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments && comments.length > 0 ? (
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
