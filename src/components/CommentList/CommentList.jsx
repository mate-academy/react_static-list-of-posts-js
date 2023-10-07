import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);

// import peopleFromServer from './people.json';

// export const App = () => (
//   <div className="box">
//     <h1 className="title">People table</h1>

//     {peopleFromServer.map(({ name, sex, born, slug }) => (
//       <tr key={slug}>
//         <td>{name}</td>
//         <td>{sex}</td>
//         <td>{born}</td>
//       </tr>
//     ))}

//     {peopleFromServer.map(person => (
//       <tr key={person.slug}>
//         <td>{person.name}</td>
//         <td>{person.sex}</td>
//         <td>{person.born}</td>
//       </tr>
//     ))}
//   </div>
// );
