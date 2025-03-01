import React from 'react';
import './CommentInfo.scss';

function CommentInfo({ comment }) {
    return (
        <div className="CommentInfo">
            <p className="CommentInfo__body">{comment.body}</p>
        </div>
    );
}

export default CommentInfo;
