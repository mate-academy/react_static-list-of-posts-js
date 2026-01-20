import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo
          post={post}
          comments={comments.filter(comment => comment.postId === post.id)}
          user={users.find(u => u.id === post.userId)}
        />
      </li>
    ))}
  </ul>
);
