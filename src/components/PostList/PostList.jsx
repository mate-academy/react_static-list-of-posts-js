import { PostInfo } from '../PostInfo'

export const PostList = ({ post }) => {
  return (
    <div className="PostList">
      {post && (
        <PostInfo post={post}/>
      )}
    </div>
  )
}
