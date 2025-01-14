import { CommentInfo } from '../CommentInfo/index';
import './CommentList.scss';

export const CommentList = ({ propsComments }) => (
  <div className="CommentList">
    {propsComments.map(comment => (
      <CommentInfo key={comment.id} propsComment={comment} />
    ))}
  </div>
);
