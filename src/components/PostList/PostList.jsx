/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */

import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

