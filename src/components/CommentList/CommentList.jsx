import { CommentInfo } from '../CommentInfo';
import commentsFromServer from '../../api/comments.json';

export const CommentList = ({ post }) => {
  const comments = commentsFromServer.filter(item => item.postId === post.id);

  return (
    <>
      {comments.length > 0 ? (
        <div>
          {comments.map(comment => (
            <CommentInfo
              comment={comment}
            />
          ))}
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </>
  );
};
