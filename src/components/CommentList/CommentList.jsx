import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <div className="CommentList">
    <CommentInfo comment={comment} />
  </div>
);
