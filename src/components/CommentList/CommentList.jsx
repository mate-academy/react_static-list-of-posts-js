import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}

    {/* <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          odio adipisci rerum aut animi
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href="mailto:Nikita@garfield.biz"
        >
          Nikita@garfield.biz
        </a>
      </div>

      <div className="CommentInfo__body">
        quia molestiae reprehenderit quasi aspernatur aut expedita
        occaecati aliquam eveniet laudantium omnis quibusdam delectus
        saepe quia accusamus maiores nam est cum et ducimus et vero
        voluptates excepturi deleniti ratione
      </div>
    </div> */}
  </div>
);
