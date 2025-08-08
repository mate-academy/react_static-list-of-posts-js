import PostInfo from '../PostInfo/PostInfo';
import './PostList.scss';

const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

export default PostList;
