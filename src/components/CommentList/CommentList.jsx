import './CommentList.scss';

export const CommentList = ({ com }) => (
  <>
    <p>
      {com.name}
      <>  </>
      by
      <>  </>
      <a href={`mailto:${com.email}`}>{com.email}</a>
    </p>
    <br />
    <p>{com.body}</p>
  </>

);
