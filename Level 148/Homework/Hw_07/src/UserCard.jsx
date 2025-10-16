import React from 'react'

function UserCard({name, surname, age, gender, friendList}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <p>My age is {age}</p>
      <ul>
        {
            friendList.map(item => {
                return <li>{item.name} - {item.status}</li>
            })
        }
        <h5>{gender}</h5>
      </ul>
    </div>
  )
}

export default UserCard
