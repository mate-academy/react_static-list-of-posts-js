import { CommentList } from "../CommentList";
import './PostInfo.scss';
import { UserInfo } from "../UserInfo";

export const PostInfo = ({ post }) => (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>
        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {Object.keys(post.comments).length !== 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <div>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </div>
      )}
    </div>
);
