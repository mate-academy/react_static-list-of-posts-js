import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostList">
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={post.user} key={post.user.id} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {!post.comments.length
        ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
        : (<CommentList comments={post.comments} />)}
    </div>
  </div>
);
