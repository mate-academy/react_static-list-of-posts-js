export const CommentInfo = ({ comment }) => (
  <>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>

    {/* <div className="CommentInfo">
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
  </>
);
