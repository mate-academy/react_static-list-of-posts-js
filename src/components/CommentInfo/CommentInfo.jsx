// import { UserInfo } from '../UserInfo/UserInfo';

export const CommentInfo = ({ comments }) => (
  <div key={comments.id} className="CommentInfo__name">
    {comments.name}
  </div>
);
