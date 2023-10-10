import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionsButtons from './ReactionsButtons'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  console.log(postId)

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2 className="font-semibold text-xl mb-8 mt-[40px]">{post.title}</h2>
        <div className="mt-7 mb-5 flex items-center justify-between">
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content leading-[1.9rem] mb-6">{post.content}</p>
        <div className="flex items-center justify-between">
          <ReactionsButtons post={post} />
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
        </div>
      </article>
    </section>
  )
}

export default SinglePostPage
