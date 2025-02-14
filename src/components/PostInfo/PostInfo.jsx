import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const NoCommentsMessage = <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} key={post.user.id} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      {post.comments.length === 0 ? (
        NoCommentsMessage
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
