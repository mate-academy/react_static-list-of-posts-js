import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const user = users.find(currentUser => currentUser.id === post.userId);

        const postComments = comments.filter(
          comment => comment.postId === post.id,
        );

        const preparedPost = {
          ...post,
          user,
          comments: postComments,
        };

        return <PostInfo key={post.id} post={preparedPost} />;
      })}
    </div>
  );
};
