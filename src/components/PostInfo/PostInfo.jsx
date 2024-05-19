import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          <span>Posted by</span>

          <UserInfo user={post.user} key={post.user.id} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {post.comments.length !== 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  </>
);
