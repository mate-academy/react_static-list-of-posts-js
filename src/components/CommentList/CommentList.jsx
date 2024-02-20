import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    <div className="CommentList">
      <CommentInfo comment={comments} />
    </div>
  </>
);
