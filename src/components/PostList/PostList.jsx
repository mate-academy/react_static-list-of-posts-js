import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList, comments, users }) => (
  <>
    {postList.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} users={users} key={post.id} />
        <CommentList
          comments={comments.filter(comment => comment.postId === post.id)}
        />
      </React.Fragment>
    ))}
  </>
);
