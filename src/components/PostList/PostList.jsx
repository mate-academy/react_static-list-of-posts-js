import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const userName = users.find(user => {
          return user.id === post.userId;
        });
        const commentsPost = comments.filter(comment => {
          return comment.postId === post.id;
        });

        return (
          <PostInfo
            key={post.id}
            post={post}
            user={userName}
            comments={commentsPost}
          />
        );
      })}
    </div>
  );
};
