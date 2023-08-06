import PropTypes from 'prop-types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <ul className="PostList__list">
      {posts.map(post => (
        <li key={post.id} className="PostList__item">
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);

const userShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: userShape.isRequired,
    }),
  ).isRequired,
};
