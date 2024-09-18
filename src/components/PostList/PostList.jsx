import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const comments = commentsFromServer.filter(
          comment => comment.postId === post.id,
        );
        const postWithoutComments = { ...post, comments };

        return <PostInfo key={post.id} post={postWithoutComments} />;
      })}
    </div>
  );
};
