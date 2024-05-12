import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ post }) => {
  return (
    <div className="CommentList">
      {post.comments.length ? (
        post.comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
