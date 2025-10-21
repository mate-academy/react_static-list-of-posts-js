import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <div className="PostInfo__body">
      <CommentList comments={post.comments} />
    </div>

    <hr />

    {post.comments.length === 0 && (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
