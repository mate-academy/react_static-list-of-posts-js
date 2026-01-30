import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div>
    <div className="PostInfo__header">
      <div className="PostInfo__title">
        <h3>{post.title}</h3>
      </div>

      <p>
        {' Posted by  '}
        <UserInfo user={post.user} />
      </p>
    </div>

    <div className="PostInfo__body">
      <p>{post.body}</p>
    </div>

    <div className="CommentList">
      {post.comments && post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <div>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </div>
      )}
    </div>
  </div>
);
