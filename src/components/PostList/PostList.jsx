import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={{
          ...post,
          user: usersFromServer.find(user => user.id === post.userId) || null,
          comments: commentsFromServer
            .filter(comment => comment.postId === post.id)
            .map(comment => ({
              ...comment,
              user:
                usersFromServer.find(user => user.email === comment.email) ||
                null,
            })),
        }}
      />
    ))}
  </div>
);
