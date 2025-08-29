import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const userExisted = post.user ? <UserInfo user={post.user} /> : '';
  const commentsExisted =
    post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {userExisted}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {commentsExisted}
    </div>
  );
};
