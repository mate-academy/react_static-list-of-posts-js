import { PostInfo } from '../PostInfo';

export const PostList = ({ objects }) => (
  <div className="PostList">
    {objects.map(post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
