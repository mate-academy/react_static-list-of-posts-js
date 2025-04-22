import { PostInfo } from '../PostInfo';

export const PostList = ({ posts = [], comments, users }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        comments={comments.filter(comment => comment.postId === post.id)}
        users={users}
        key={post.id}
      />
    ))}
  </div>
);
