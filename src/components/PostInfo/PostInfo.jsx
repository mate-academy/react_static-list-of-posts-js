import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
    </div>

    {post.user && <UserInfo user={post.user} />}

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <CommentList comments={post.comments} />
  </div>
);
