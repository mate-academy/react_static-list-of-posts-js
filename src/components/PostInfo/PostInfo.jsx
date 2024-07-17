import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const CommentLength =
    post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} key={post.comments.id} />
    );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} key={post.id} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {CommentLength}
    </div>
  );
};
