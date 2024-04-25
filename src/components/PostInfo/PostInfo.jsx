import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__item">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>
          <p>
            {' Posted by '}
            {post.user && <UserInfo user={user} />}
          </p>
        </div>
        <p className="PostInfo__body">{body}</p>
        {comments && comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <div>
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </div>
        )}
      </div>
    </div>
  );
};
