import './PostList.scss';

import commentsFromServer from '../../api/comments.json';

import { PostInfo } from '../PostInfo/PostInfo';

const getCommentsByPostId = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={{ comments: getCommentsByPostId(post.id), ...post }}
        key={post.id}
      />
    ))}
  </div>
);
