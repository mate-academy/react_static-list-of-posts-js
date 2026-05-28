import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h3 className="PostInfo__title">{post.title}</h3>

    <p className="PostInfo__body">{post.body}</p>

    <UserInfo user={post.user} />

    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);
