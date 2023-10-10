import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers, selectUserById } from '../users/userSlice'

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId))

  return (
    <span className="author">by {author ? author.name : 'Unknown author'}</span>
  )
}

export default PostAuthor
