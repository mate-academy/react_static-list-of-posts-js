import './CommentInfo.scss';

export const CommentInfo = ({ comm }) => {
  if (!comm) {
    console.error('Received undefined or null comment prop');

    return null;
  }

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comm.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comm.email}`}>
          {comm.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comm.body}</div>
    </div>
  );
};
