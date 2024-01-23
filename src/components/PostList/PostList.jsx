import { PostInfo } from '../PostInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostList = ({ postsFromServer }) => (
  <div className="PostList">
    {postsFromServer.map(post => (
      <PostInfo
        post={post}
        key={post.id}
        filteredComments={commentsFromServer
          .filter(comment => comment.postId === post.id)}
        filteredUsers={usersFromServer.find(user => user.id === post.userId)}
      />
    ))}
  </div>
);
