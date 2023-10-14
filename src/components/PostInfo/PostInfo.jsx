import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>{' Posted by  '}</p>
      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
