import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, userList, commenstList }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo
        user={userList.find(user => user.id === post.userId)}
        key={post.id}
      />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList
      key={post.id}
      commenstList={commenstList.filter(comment => comment.postId === post.id)}
    />
  </div>
);
