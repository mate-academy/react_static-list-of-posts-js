import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { title, body } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {post.user && (
          <p>
            {' Posted by  '}

            <UserInfo user={post.user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {post.comments ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
