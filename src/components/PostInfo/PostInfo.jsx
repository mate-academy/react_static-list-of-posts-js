import { CommentList } from '../CommentList';
import { NoCommentsMessage } from '../NoCommentsMessage';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { user } = post;
  const { comments } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
            {' Posted by  '}
            {user && <UserInfo user={user} />}
          </p>
        </div>

        <p className="PostInfo__body">{post.body}</p>

        {comments.length !== 0
          ? <CommentList comments={comments} />
          : <NoCommentsMessage />
        }

      </div>
    </>
  );
};
