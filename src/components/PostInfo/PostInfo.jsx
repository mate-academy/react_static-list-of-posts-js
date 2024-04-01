import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {Object.keys(post.user).length && <UserInfo user={post.user} />}
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {post.comments.length ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </li>
);
