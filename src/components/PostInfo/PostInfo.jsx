import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {post.comments.length > 0 ? (
      <div className="CommentList">
        {post.comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
