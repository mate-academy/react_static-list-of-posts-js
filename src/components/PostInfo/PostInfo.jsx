import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>

    <p className="PostInfo__body">{post.body}</p>

    <UserInfo user={post.user} />

    {post.comments.length === 0 ? (
      <div data-cy="NoCommentsMessage">No comments yet</div>
    ) : (
      post.comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    )}
  </div>
);
