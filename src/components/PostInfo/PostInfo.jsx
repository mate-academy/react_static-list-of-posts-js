import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const allOfComments = post.comments.length !== 0
    ? (
      <CommentList
        comments={post.comments}
      />
    ) : (
      <div className="CommentList" data-cy="NoCommentsMessage">
        <div className="CommentInfo__body">
          No comments available
        </div>
      </div>
    );

  const userIdentefity = post.user !== null
    ? (
      <UserInfo
        user={post.user}
      />
    ) : 'anonim';

  if (post.length === 0) {
    return null;
  }

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {post.title}
          </h3>

          <p>
            {' Posted by  '}

            {userIdentefity}
          </p>
        </div>

        <p className="PostInfo__body">
          {post.body}
        </p>

        {allOfComments}

      </div>
    </>
  );
};
