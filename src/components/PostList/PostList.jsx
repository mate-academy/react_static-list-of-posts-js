import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        user={post.user}
        title={post.title}
        body={post.body}
        comments={post.comments}
      />
    ))}
  </div>
);
