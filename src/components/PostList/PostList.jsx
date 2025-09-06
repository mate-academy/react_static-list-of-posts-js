import { PostInfo } from '../PostInfo';

export const PostList = ({ preparedPosts }) => (
  <div className="PostList">
    {preparedPosts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
