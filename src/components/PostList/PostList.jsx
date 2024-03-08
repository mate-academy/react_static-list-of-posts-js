import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo
        post={post}
        userList={usersFromServer}
        commenstList={commentsFromServer}
        key={post.id}
      />
    ))}
  </div>
);
