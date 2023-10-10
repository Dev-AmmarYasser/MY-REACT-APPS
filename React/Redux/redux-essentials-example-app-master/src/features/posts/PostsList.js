import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Spinner } from '../../components/Spinner'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionsButtons from './ReactionsButtons'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import {
  selectAllPosts,
  fetchPosts,
  selectPostIds,
  selectPostById,
} from './postsSlice'
import { selectAllUsers, selectUserById } from '../users/userSlice'

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId))
  return (
    <article className="post-excerpt">
      <h3 className="font-semibold text-xl">{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <div className="flex items-center justify-between">
        <ReactionsButtons post={post} />
        <TimeAgo timestamp={post.date} />
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </div>
    </article>
  )
}

const PostsList = () => {
  const dispatch = useDispatch()
  const orderedPostIds = useSelector(selectPostIds)
  const error = useSelector((state) => state.posts.error)

  const postStatus = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2 className="text-3xl font-bold mt-8 mb-6">Posts</h2>
      {content}
    </section>
  )
}

export default PostsList
