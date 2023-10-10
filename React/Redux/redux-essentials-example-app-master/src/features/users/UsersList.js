import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { selectAllUsers } from './userSlice'
import { selectAllUsers, selectUserById } from '../users/userSlice'

const UsersList = () => {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map((user) => (
    <li
      key={user.id}
      className="bg-redux users-li text-white text-[20px] font-semibold rounded-xl text-center mb-3 p-3 "
    >
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2 className="text-3xl font-bold mt-8 mb-6 ">Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
  )
}

export default UsersList
