import './PostInfo.scss'
import { CommentList } from '../CommentList'
import { UserInfo } from '../UserInfo'

export const PostInfo = ({ post }) => {
  const {title, user, comments} = post

  return (
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          <p>
            {' Posted by  '}

            <UserInfo user={user}/>
          </p>
        </div>

        <p className="PostInfo__body">
          {post.body}
        </p>

        <CommentList comments={comments}/>
      </div>
  )
}
