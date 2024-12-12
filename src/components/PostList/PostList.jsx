import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ listPosts }) => (
  <div className="PostList">
    {listPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
