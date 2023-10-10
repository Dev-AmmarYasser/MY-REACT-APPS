import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

import { addNewPost } from './postsSlice'
import { selectAllUsers, selectUserById } from '../users/userSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  console.log(content)

  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSaveClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error(`Failed To save post :`, err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2 className="text-3xl font-bold mt-8 mb-6 ">Add a New Post</h2>
      <form>
        <label htmlFor="postTitle" className="text-[18px] mb-[10px]">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          placeholder="What's in your mind ?"
        />
        <label htmlFor="postContent" className="text-[18px] mb-[10px]">
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          className="p-3"
        />
        <label htmlFor="postAuthor" className="text-[18px] mb-[10px]">
          Author:
        </label>
        <select
          id="postAuthor"
          className="p-3"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <button
          type="button"
          onClick={onSaveClicked}
          disabled={!canSave}
          className="mt-5 bg-blue-600"
        >
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
