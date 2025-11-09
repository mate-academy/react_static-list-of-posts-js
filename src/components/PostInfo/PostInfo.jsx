import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <article className="PostInfo">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        Posted by <UserInfo user={post.user} />
      </p>

      <p className="PostInfo__body">{post.body}</p>

      <CommentList comments={post.comments} />
    </article>
  );
};
