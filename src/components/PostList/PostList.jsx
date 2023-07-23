import { PropTypes } from 'prop-types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
