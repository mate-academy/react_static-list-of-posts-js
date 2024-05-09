// import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  console.log(posts, 'posts');

  return (
    <div className="PostList">
      {posts.map(postWithUser => (
        <PostInfo post={postWithUser} key={postWithUser.id} />
      ))}
    </div>
  );
};
