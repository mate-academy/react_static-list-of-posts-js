import './PostList.scss';

import usersList from '../../api/users.json';
import postsList from '../../api/posts.json';
import commentsList from '../../api/comments.json';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = () => {
  return (
    <div className="PostList">
      {postsList.map(post => {
        const user = usersList.find(u => u.id === post.userId);
        const comments = commentsList.filter(c => c.postId === post.id);

        const postWithDetails = { ...post, user, comments };

        return <PostInfo key={post.id} post={postWithDetails} />;
      })}
    </div>
  );
};
