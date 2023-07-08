import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, users, comments }) => {
  const author = users.find(user => post.userId === user.id);
  const arrOfComments = comments.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {`Posted by `}
          <UserInfo user={author} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {arrOfComments.length > 0 ? (
        <CommentList arrOfComments={arrOfComments} />
      ) : (
        <div>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </div>
      )}
    </div>
  );
};
