import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
    </div>
    <p>
      {' Posted by  '}
      {post.user && <UserInfo user={post.user} />}
    </p>
    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {post.comments && post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
