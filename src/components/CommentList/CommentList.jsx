import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ postId, commentsWithPosts }) => {
  return (
    <div className="CommentList">
      {commentsWithPosts.map(comment =>
        comment.postId === postId ? (
          <CommentInfo comment={comment} key={comment.id} />
        ) : null,
      )}
    </div>
  );
};
