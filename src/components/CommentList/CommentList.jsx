import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  let commentList = <b data-cy="NoCommentsMessage">No comments yet</b>;
  const commentObjects = comments;

  if (comments.length > 0) {
    commentList = commentObjects.map(comment => (
      <CommentInfo
        name={comment.name}
        email={comment.email}
        body={comment.body}
        key={comment.id}
      />
    ));
  }

  return commentList;
};
