import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ coment }) => (
  <div className="CommentList">
    <CommentInfo coment={coment} />
  </div>
);
