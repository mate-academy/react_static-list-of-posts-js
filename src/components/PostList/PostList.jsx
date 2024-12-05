// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
