import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const comments = post?.comments || [];

  if (comments.length === 0) {
    return (
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>
          <UserInfo user={post.user} />
        </div>

        <p className="PostInfo__body">{post.body}</p>

        <div className="CommentList">
          <strong data-cy="NoCommentsMessage" className="CommentInfo__name">
            No comments yet
          </strong>
        </div>
      </div>
    );
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <CommentList comments={post.comments} />
    </div>
  );
};
