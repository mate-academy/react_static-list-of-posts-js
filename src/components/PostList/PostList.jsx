import PropTypes from 'prop-types';

import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const comments = commentsFromServer.filter(
        comment => comment.postId === post.id,
      );

      const postWithComments = { ...post, comments };

      return <PostInfo post={postWithComments} key={post.id} />;
    })}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
