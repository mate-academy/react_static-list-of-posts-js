import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        title={post.title}
        user={post.user}
        body={post.body}
        comments={post.comments}
      />
    ))}
  </div>
);
