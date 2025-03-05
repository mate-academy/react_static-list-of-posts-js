import React, { useState, useEffect } from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsWithCommentsAndUsers = postsFromServer
      .map(post => {
        const postComments = commentsFromServer.filter(
          comment => comment.postId === post.id,
        );
        const postUser = usersFromServer.find(user => user.id === post.userId);

        return {
          ...post,
          user: postUser,
          comments: postComments,
        };
      })
      .sort((a, b) => a.id - b.id);

    setPosts(postsWithCommentsAndUsers);
  }, []);

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
