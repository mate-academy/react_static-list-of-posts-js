// import { useReducer } from 'react';
// import { CommentInfo } from '../CommentInfo/CommentInfo';
import { CommentList } from '../CommentList/CommentList';

import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {post.comments && post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
// user: {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// } | null;
// comments: {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// }[];
// id: number;
// userId: number;
// title: string;
// body: string;
// }[]

// import { useReducer } from 'react';

// export const PostInfo = ({ post }) => (
//   <>
//     <div className="PostInfo">
//       <div className="PostInfo__header">
//         <h3 className="PostInfo__title">{post.title}</h3>

//         <p>
//           {' Posted by  '}

//           <a className="UserInfo" href={post.user.email}>
//             {/* Leanne Graham */}
//             {post.user.name}
//           </a>
//         </p>
//       </div>

//       <p className="PostInfo__body">{post.body}</p>

//       <div className="PostInfo__comments">
//         {post.comments.map(comment => (
//           <p key={comment.id} className="PostInfo__comment">
//             {comment.postId}: {comment.body}
//           </p>
//         ))}
//       </div>

//       <hr />

//       <b data-cy="NoCommentsMessage">No comments yet</b>
//     </div>
//   </>
// );
