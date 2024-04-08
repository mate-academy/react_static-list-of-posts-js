import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments, post }) => {
  const commentsPost = comments.filter(comment => comment.postId === post.id);
  const ifComentPost =
    commentsPost.length > 0 ? (
      commentsPost.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );

  return <div className="CommentList">{ifComentPost}</div>;
};
