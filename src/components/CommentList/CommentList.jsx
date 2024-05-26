import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ coments }) => (
  <div className="CommentList">
    {coments.map(coment => (
      <CommentInfo coment={coment} />
    ))}
  </div>
);
