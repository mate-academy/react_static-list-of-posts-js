import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { user } = post;
  let classPostInfo = 'NoCommentsMessage';

  if (post.comments.length !== 0) {
    classPostInfo = 'CommentInfo__body';
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <UserInfo key={user.id} user={user} />
      </div>

      <p className="PostInfo__body"> {post.body} </p>

      <hr />
      {classPostInfo === 'NoCommentsMessage' ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
