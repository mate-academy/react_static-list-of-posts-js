import React from 'react';
import { PostInfo } from '../PostInfo';

export const PostList = ({ allInfo }) => {
  const { id } = allInfo;

  return (
    <div className="PostList">
      {allInfo.map(info => (
        <PostInfo
          key={id}
          info={info}
        />
      ))}
    </div>
  );
};
