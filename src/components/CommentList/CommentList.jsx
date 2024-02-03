import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments, postId }) => (
  <div className="CommentList">
    {comments
      .map(comment => <CommentInfo comment={comment} key={comment.id} />)
    }

  </div>
);
