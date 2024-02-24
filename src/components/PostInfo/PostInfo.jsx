import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

const commentSection = comments => {
  return comments.length >= 1 ? (
    <CommentList comments={comments} />
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '} <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {commentSection(post.comments)}
  </div>
);
