import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="Post">
    <p className="PostInfo__title">{post.title}</p>
    <p className="PostInfo__body">{post.body}</p>

    {post.user && <UserInfo user={post.user} />}

    {post.comments && post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
