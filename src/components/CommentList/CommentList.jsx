import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ coments }) => {
  return (
    <div className="CommentList">
      {coments.map(coment => (
        <CommentInfo coment={coment} key={coment.id} />
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
