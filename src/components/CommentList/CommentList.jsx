import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) =>
  comments.map(comment => <CommentInfo comment={comment} key={comment.id} />);
