import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ user, post, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {user ? <UserInfo user={user} /> : null}
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {comments && comments.length > 2 ? (
      <CommentList comments={comments} />
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
