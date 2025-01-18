import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, commentsList }) => {
  const postComments = commentsList.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          Posted by {post.user.name}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {postComments.length > 0 ? (
        <CommentList postComments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
