import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(coment => (
      <CommentInfo key={coment.id} comment={coment} />
    ))}
  </div>
);
