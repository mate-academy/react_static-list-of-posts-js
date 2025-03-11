import React from "react";
import { PostInfo } from "../PostInfo/PostInfo";
export const PostList = ({posts}) => {
    return (
        <div className="PostList">
            <div>
            {posts.map(post => (
                <PostInfo key={post.id} post={post} />
            ))}
            </div>
        </div>
    )
};
