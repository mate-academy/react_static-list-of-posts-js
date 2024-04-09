import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map(comment => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  </>
);
