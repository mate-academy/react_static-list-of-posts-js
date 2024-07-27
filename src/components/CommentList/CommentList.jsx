import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <>
    {post.comment?.map(com => {
      return <CommentInfo comment={com} key={com.id} />;
    })}
  </>
);
