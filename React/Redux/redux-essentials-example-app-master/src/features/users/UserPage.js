import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectUserById } from '../users/userSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))

  const postTitles = postsForUser.map((post) => (
    <li
      key={post.id}
      className="user-li my-4 text-xl bg-redux p-4 rounded-xl text-white"
    >
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2 className="font-semibold text-3xl text-center mb-8 mt-[40px]">
        {user.name}
      </h2>

      <ul>{postTitles}</ul>
    </section>
  )
}

export default UserPage
