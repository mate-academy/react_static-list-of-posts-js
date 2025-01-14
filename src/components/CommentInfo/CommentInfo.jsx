export const CommentInfo = ({ propsComment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{propsComment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${propsComment.email}`}>
        {propsComment.email}
      </a>
    </div>

    <div className="CommentInfo__body"> {propsComment.body} </div>
  </div>
);
