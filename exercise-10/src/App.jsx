import React from 'react'
import UserList from './components/exercise10'

const App = () => {

  // Eexercise#10
  const users = [
  {
    id: 1,
    name: "Abdalla Daud",
    email: "abdalla@gmail.com",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
  },
  {
    id: 3,
    name: "Mohamed Hassan",
    email: "mohamed@gmail.com",
  }
];
  return (
    <div>
      <UserList users={users} />
    </div>
  )
}

export default App
