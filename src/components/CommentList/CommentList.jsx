import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(infoComent => (
      <CommentInfo comment={infoComent} key={infoComent.id} />))}
  </div>
);
