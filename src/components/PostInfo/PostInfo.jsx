import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        <UserInfo key={post.user.id} user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={post.comments} />
  </div>
);
