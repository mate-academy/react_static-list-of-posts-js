// src/components/PostList/PostList.jsx
import './PostList.scss'; // Correct, as this is its own stylesheet
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {/* Ensure 'posts' array is not empty before mapping to avoid errors if data isn't loaded yet */}
      {posts.length > 0 ? (
        posts.map(post => (
          // Use 'key' prop for each post to help React identify which items have changed, are added, or are removed
          <PostInfo key={post.id} post={post} />
        ))
      ) : (
        <p>Loading posts...</p> // Or any other loading indicator
      )}
    </div>
  );
};
