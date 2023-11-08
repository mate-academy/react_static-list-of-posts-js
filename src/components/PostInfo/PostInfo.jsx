import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <>
    <div key={post.id} className="PostInfo">
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
      {post.comments.length === 0 ? (
        <div data-cy="NoCommentsMessage">No comments</div>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  </>
);
