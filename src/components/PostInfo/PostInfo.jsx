import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        Posted by <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length === 0 ? (
      <p data-cy="NoCommentsMessage" className="PostInfo__no-comments">
        No comments available
      </p>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
