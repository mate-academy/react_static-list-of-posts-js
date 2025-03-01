import React from 'react';
import CommentInfo from './CommentInfo';
import './CommentList.scss';

function CommentList({ comments }) {
    return (
        <div className="CommentList">
            {comments.map(comment => (
                <CommentInfo key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

export default CommentList;
