import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

import commentsFromServer from '../../api/comments.json';
import postsFromServer from '../../api/posts.json';
import usersFromServer from '../../api/users.json';

export const PostList = () => {
  const postsWithData = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="PostList">
      {postsWithData.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
