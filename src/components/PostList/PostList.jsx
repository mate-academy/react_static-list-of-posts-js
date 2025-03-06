import { PostInfo } from '../PostInfo';

export const PostList = ({ obg }) => {
  const { posts, users, comments } = obg;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          post={post}
          user={users.find(user => user.id === post.userId)}
          comment={comments.filter(comment => comment.postId === post.id)}
        />
      ))}
    </div>
  );
};
