import React from 'react'
import HomeStyles from '../styles/Home.module.css';

const UsersList = ({users}) => {
    
  return (
    <div>
        <main className={HomeStyles.main}>
            <div className={HomeStyles.grid}>
               { users?.map(user => <div className={HomeStyles.card}  style={{overflow:"hidden"}} key={user.id}>
                    <p>Username:{user.username}</p>
                    <p>Email:{user.email}</p>
                    <p>Name:{user.name}</p>
                    <a href={`/user/${user.id}`}>Know More</a>
                    </div>
                    )}
            </div>

        </main>
    </div>
   
  )
}

export default UsersList