import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {/* <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">pariatur omnis in</strong>

        {' by '}

        <a className="CommentInfo__email" href="mailto:Telly_Lynch@karl.co.uk">
          Telly_Lynch@karl.co.uk
        </a>
      </div>

      <div className="CommentInfo__body">
        dolorum voluptas laboriosam quisquam ab totam beatae et aut aliquid
        optio assumenda voluptas velit itaque quidem voluptatem tempore
        cupiditate in itaque sit molestiae minus dolores magni
      </div>
    </div>

    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          odio adipisci rerum aut animi
        </strong>

        {' by '}

        <a className="CommentInfo__email" href="mailto:Nikita@garfield.biz">
          Nikita@garfield.biz
        </a>
      </div>

      <div className="CommentInfo__body">
        quia molestiae reprehenderit quasi aspernatur aut expedita occaecati
        aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus
        maiores nam est cum et ducimus et vero voluptates excepturi deleniti
        ratione
      </div>
    </div> */}
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
