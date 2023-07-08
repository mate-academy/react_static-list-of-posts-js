import { PostInfo } from '../PostInfo/PostInfo';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        users={usersFromServer}
        comments={commentsFromServer}
      />
    ))}
    ;
  </div>
);
