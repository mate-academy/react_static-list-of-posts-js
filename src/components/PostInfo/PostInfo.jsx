import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.userId && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments && !post.comments.length ? (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
