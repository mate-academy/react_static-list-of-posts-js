import { CommentList } from "../CommentList/CommentList";
import { UserInfo } from "../UserInfo/UserInfo";
import "./PostInfo.scss";

export const PostInfo = ({ post }) => {
  const { comments = [], user = null } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post?.title}</h3>

        <p>
          {" Posted by  "}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{post?.body}</p>

      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
