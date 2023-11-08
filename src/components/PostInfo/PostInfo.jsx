import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { id, user, title, body, comments } = post;

  return (
    <div key={id} className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      </div>
      <p className="PostInfo__body">
        {body}
      </p>
      {post.comments.length === 0 ? (
        <div data-cy="NoCommentsMessage">No comments</div>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
