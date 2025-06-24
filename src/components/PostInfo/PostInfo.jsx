import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2> {post.title} </h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    {post.comments.length !== 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p>No comments yet</p>
    )}
  </div>
);
