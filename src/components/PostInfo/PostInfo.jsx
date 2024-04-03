import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, users, comments }) => {
  const postUser = users.find(user => user.id === post.userId) || null;
  const postComments =
    comments.filter(comment => comment.postId === post.id) || null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {postUser && <UserInfo user={postUser} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {postComments.length  ? (
        <CommentList comments={postComments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
