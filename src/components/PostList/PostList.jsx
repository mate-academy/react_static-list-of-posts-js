import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
