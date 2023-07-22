import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    <ul className="CommentList">
      <CommentInfo comments={comments} />
    </ul>
  </>
);
