import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments, postId }) => (
  <div className="CommentList">
    {comments
      .map(comment => <CommentInfo comment={comment} key={comment.id} />)
    }

  </div>
);
