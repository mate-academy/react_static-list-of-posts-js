import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(({ id, name, email, body }) => (
      <CommentInfo key={id} name={name} email={email} body={body} />
    ))}
  </div>
);
