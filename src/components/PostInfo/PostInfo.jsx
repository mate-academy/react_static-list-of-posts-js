import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        <UserInfo post={post} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>
    <div>
      <CommentList comments={post.comments} />
    </div>
  </div>
);
