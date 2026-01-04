import { PostInfo } from '../PostInfo/PostInfo';

import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostList = () => {
  const users = usersFromServer;

  const posts = postsFromServer.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
