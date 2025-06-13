import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments, users }) => {
  const getUserById = userId => {
    return users.find(u => u.id === userId);
  };

  const getCommentsByPostId = postId => {
    return comments.filter(comment => comment.postId === postId);
  };

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          post={{
            ...post,
            user: getUserById(post.userId),
            comments: getCommentsByPostId(post.id),
          }}
        />
      ))}
    </div>
  );
};
