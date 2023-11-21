import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const commentsList = post.comments;
  const isNotEmptyArray = commentsList.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {'Posted by '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {isNotEmptyArray ? (
        <CommentList comments={commentsList} />
      ) : (

      // <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>

      )}
    </div>
  );
};
