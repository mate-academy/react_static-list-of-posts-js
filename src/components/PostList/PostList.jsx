import { UserInfo } from "../UserInfo/UserInfo"
export const PostList = ({posts}) => {
  return(
    <div className="PostList">
    {posts.map(post =>
      <UserInfo
      key={post.id}
      post={post}
      />
    )}

    </div>
  )
}
