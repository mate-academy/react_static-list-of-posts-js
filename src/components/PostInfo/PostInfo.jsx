import React from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import './PostInfo.scss';

function PostInfo({ post }) {
    return (
        <div className="PostInfo">
            <h2 className="PostInfo__title">{post.title}</h2>
            <p className="PostInfo__body">{post.body}</p>
            {post.user && <UserInfo user={post.user} />}
            <CommentList comments={post.comments} />
        </div>
    );
}

export default PostInfo;
