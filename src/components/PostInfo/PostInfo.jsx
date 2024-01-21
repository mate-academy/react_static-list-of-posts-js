import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { user } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />
      {post.comments.length === 0
        ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
        : (<CommentList comments={post.comments} />)
      }

    </div>
  );
};
