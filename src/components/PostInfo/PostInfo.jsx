import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={post.user} />
      </p>
      <p className="PostInfo__body">{post.body}</p>
    </div>
    <CommentList comments={post.comments} />
  </div>
);
