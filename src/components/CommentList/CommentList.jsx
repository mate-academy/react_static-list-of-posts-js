import comments from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = () => (
  <>
    {comments.map(comment => (
      <div className="CommentList" key={comment.postId}>
        <CommentInfo />
      </div>
    ))}
  </>
);
