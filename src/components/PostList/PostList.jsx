import React from 'react';
import { PostInfo } from '../PostInfo';
import postsFromServer from '../../api/posts.json';
import { combinedInput } from '../../utilities/combinedInput';

const postsWithUsersAndCommentsData = combinedInput(postsFromServer);

export const PostList = () => {
  return (
    <div className="PostList">
      {postsWithUsersAndCommentsData.map(post => (
        <div key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
