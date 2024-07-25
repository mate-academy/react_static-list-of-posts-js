import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map(item => (
        <CommentInfo comment={item} key={item.id} />
      ))}
    </>
  );
};
