import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

function commentList(comments) {
  if (comments.length > 0) {
    return <CommentList comments={comments} />;
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {commentList(post.comments)}
  </div>
);
