import { UserInfo } from '../../../../react_static-list-of-todos-js/src/components/UserInfo/UserInfo'
import './PostInfo.scss'
import { CommentInfo } from '../CommentInfo/CommentInfo'
export const PostInfo = ({post}) => {
  return (
    <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
            {' Posted by  '}

           {(post.user &&(<UserInfo
             user={post.user}
             />)
             )
           }
          </p>
        </div>

        <p className="PostInfo__body">
         {post.body}
        </p>
        {post.comment?.map(coment =>(
          <CommentInfo
          key={coment.id}
          comment={coment}
        />
        ))}
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
  )
}
