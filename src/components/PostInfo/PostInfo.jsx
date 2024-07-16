import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length ? (
      <CommentList comments={post.comments} />
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
