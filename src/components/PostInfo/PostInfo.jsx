import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  let commentsList = <b data-cy="NoCommentsMessage">No comments yet</b>;

  if (post.comments.length > 0) {
    commentsList = <CommentList comments={post.comments} />;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>

      {commentsList}
    </div>
  );
};
