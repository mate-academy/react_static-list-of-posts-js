import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={{
          ...post,
          comments: commentsFromServer.filter(
            comment => comment.postId === post.id,
          ),
        }}
      />
    ))}
  </div>
);
