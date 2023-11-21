import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <div className="CommentList">
    {post.comments.length
      ? post.comments.map(coment => (
        <CommentInfo coment={coment} key={coment.id} />
      ))
      : (
        <b data-cy="NoCommentsMessage">
          No comments yet
        </b>
      )}

  </div>
);
