import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  let come;

  if (post.comments.length === 0) {
    come = <b data-cy="NoCommentsMessage">No comments yet</b>;
  } else {
    come = <CommentList comments={post.comments} />;
  }

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

      {come}
    </div>
  );
};
