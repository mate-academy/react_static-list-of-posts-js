import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by '}
        <a className="UserInfo" href={`mailto:${post.user.email}`}>
          {post.user.name}
        </a>
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
