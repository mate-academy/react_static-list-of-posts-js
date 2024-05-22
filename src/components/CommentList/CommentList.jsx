import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

// const fullPostData: {
//   postComments: {
//       postId: number;
//       id: number;
//       name: string;
//       email: string;
//       body: string;
//   }[];
//   user: {
//       id: number;
//       name: string;
//       username: string;
//       email: string;
//   } | undefined;
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }[]
