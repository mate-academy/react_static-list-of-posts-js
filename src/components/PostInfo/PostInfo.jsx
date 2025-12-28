/* eslint-disable prettier/prettier */

import './PostInfo.scss'

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          Posted by <UserInfo user={post.user}/>
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      <CommentList comments={post.comments}/>
    </div>
  )
};

/*
App
 └─ PostList (приймає масив posts)
     └─ PostInfo (один пост) - рендериться для кожного поста
         ├─ UserInfo (user поста)
         └─ CommentList (масив comments поста)
             └─ CommentInfo (один коментар) - рендериться для кожного коментаря
*/
