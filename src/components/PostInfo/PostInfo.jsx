import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ postDetail }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{postDetail.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo postDetail={postDetail} />
      </p>
    </div>

    <p className="PostInfo__body">{postDetail.body}</p>

    <CommentList postDetail={postDetail} />
  </div>
);
