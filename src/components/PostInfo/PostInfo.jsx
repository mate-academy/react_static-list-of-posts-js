import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={post.user} />
        {/* <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${post.user.email}`}>
            {post.user.name}
          </a>
        </p> */}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      {post.comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
