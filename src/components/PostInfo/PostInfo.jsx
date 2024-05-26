import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const checkComments = () => {
    if (post.comments && post.comments.length > 0) {
      return <CommentList comments={post.comments} />;
    }

    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {checkComments()}
    </div>
  );
};
