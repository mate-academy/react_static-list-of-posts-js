import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <>
    {post.comment.length > 0 ? (
      <>
        {post.comment.map(com => {
          return <CommentInfo comment={com} key={com.id} />;
        })}
      </>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </>
);
