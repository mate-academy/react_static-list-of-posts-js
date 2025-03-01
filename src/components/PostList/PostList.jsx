import React from 'react';
import PostInfo from './PostInfo';
import './PostList.scss';

function PostList({ posts }) {
    return (
        <div className="PostList">
            {posts.map(post => (
                <PostInfo key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;
