import { useState } from "react";

// by using List


// const UserList = ( {users} )=> {

//     return (
//         <>  
//             <ul>
//                 {
//                     users.map(user=>(
//                         <li key={user.id}>{user.name} ( {user.email} )</li>
                        
//                     ))
//                 }
                

//             </ul>
        
//         </>
//     )
// }

//by using table

const UserList = ({ users }) => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;