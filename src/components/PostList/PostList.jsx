import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  const getCommentsByPostId = postId => {
    return comments.filter(comment => comment.postId === postId);
  };

  const getUserById = userId => {
    return users.find(user => user.id === userId);
  };

  return (
    <div className="PostList">
      {posts.map(post => {
        const user = getUserById(post.userId);
        const postComments = getCommentsByPostId(post.id);

        return (
          <PostInfo
            key={post.id}
            post={{
              ...post,
              user,
              comments: postComments,
            }}
          />
        );
      })}
    </div>
  );
};
