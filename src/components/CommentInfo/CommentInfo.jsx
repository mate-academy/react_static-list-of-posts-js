export const CommentInfo = ({ comment }) => (

  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>
);

// export const CommentInfo = ({ todo }) => (
//   <div className="CommentInfo">
//     <div className="CommentInfo__title">
//       <strong className="CommentInfo__name">
//         {/* {todo.comment && todo.comment.name} */}
//         {todo.comment && todo.comment.map(el => el.name)}
//       </strong>

//       {' by '}

//       <a
//         className="CommentInfo__email"
//         href={todo.comment && todo.comment.map(el => el.email)}
//       >
//         {todo.comment && todo.comment.map(el => el.email)}
//       </a>
//     </div>

//     <div className="CommentInfo__body">
//       {todo.comment && todo.comment.map(el => el.body)}
//     </div>
//   </div>
// );
