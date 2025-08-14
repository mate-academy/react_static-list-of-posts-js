import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <article className="PostInfo">
      <h2 className="PostInfo__title">{post.title}</h2>
      <p className="PostInfo__body">{post.body}</p>
      <UserInfo user={post.user} />
      {post.comments && post.comments.length > 0 && (
        <CommentList comments={post.comments} />
      )}
    </article>
  );
};
