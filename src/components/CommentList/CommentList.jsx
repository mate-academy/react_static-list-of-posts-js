import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <div className="CommentInfo">
    {post.comment?.map(com => {
      return <CommentInfo comment={com} key={com.id} />;
    })}
  </div>
);
