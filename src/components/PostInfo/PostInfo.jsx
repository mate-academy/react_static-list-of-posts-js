import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo post={post} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <CommentList post={post} />
  </div>
);
