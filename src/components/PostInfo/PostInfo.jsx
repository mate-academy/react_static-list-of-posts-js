import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p className="PostInfo__body">{post.body}</p>
      {post.user && <UserInfo user={post.user} />}
    </div>

    <hr />

    <div className="PostInfo__comments">
      {post.comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  </div>
);
