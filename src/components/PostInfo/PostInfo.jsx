import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user && <UserInfo user={post.user} />}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      <CommentList comments={post.comments} />
    </div>
  );
};
