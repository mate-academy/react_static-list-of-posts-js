import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) =>
  posts.length > 0 ? (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          post={{
            ...post,
            comments: comments.filter(comment => comment.postId === post.id),
            user: users.find(user => user.id === post.userId),
          }}
        />
      ))}
    </div>
  ) : (
    <p>No posts available</p>
  );
