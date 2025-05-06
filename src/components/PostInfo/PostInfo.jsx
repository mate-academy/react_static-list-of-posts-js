import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  if (post.comments.length !== 0) {
    return (
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
            {' Posted by '}
            <UserInfo user={post.user} />
          </p>
        </div>

        <p className="PostInfo__body">{post.body}</p>

        <CommentList comments={post.comments} />
      </div>
    );
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>
  );
};
