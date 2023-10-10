import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { postUpdated, selectPostById } from './postsSlice'

const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2 className="font-semibold text-3xl my-[20px]">Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's in your mind ?"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Post Content :</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
          className="p-3 min-h-[200px] mb-6"
        />
      </form>
      <button type="button" onClick={onSavePostClicked} className="bg-blue-500">
        Save Post
      </button>
    </section>
  )
}

export default EditPostForm
