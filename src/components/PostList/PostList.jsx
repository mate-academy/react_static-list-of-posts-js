import { PostInfo } from '../PostInfo';

export const PostList = ({ postsWithComments }) => (
  <div className="PostList">
    {postsWithComments.map(post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
