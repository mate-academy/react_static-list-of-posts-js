import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { id, title, user, body, comments } }) => (
  <div className="PostInfo" key={id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
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
