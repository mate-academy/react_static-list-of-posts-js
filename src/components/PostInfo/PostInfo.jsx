import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { NoCommentsMessage } from '../NoCommentsMessage';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {'Posted by '}

        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <NoCommentsMessage />
    )}
  </div>
);
