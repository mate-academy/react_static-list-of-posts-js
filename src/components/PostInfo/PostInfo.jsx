import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  if (!post) return null;
  const { title, body, user, comments } = post;

  return (
    <article className="PostInfo" data-id={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <div className="PostInfo__user">
          <UserInfo user={user} />
        </div>
      </div>

      <div className="PostInfo__body">{body}</div>

      <div className="PostInfo__comments">
        <h4 className="PostInfo__comments-title">Comments</h4>
        <CommentList comments={comments} />
      </div>
    </article>
  );
};
