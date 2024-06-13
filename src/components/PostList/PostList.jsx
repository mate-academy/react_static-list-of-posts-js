import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ list }) => (
  <div className="PostList">
    {list.map(info => (
      <PostInfo key={info.id} info={info} />
    ))}
  </div>
);
