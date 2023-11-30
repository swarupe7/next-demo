import React from 'react'
import HomeStyles from "../../../styles/Home.module.css";
const index = ({user}) => {
  return (
    <div>
      <div className={HomeStyles.title}>
          {user.name}
      </div>
      <main className={HomeStyles.main}>
            <div className={HomeStyles.grid}>
               <div className={HomeStyles.card}  >
                    <p>Username:{user.username}</p>
                    <p>Email:{user.email}</p>
                    <p>Name:{user.name}</p>
                    <p>ph no:{user.phone}</p>
                    <p>company:{user.company.name}</p>
                    <p>website:{user.website}</p>
                    
                    </div>
                  
            </div>

        </main>


    </div>
  )
}


export async function getServerSideProps(context) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user=await res.json();
    return {
      props: {
        user
      },
    };
  }

// export async function getStaticPaths(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const users=await res.json();
//     const paths=users.map(user=>({params:{id:user.id.toString()}}));
//     return {
//         paths:paths,
//         fallback:false
//     }
// }

export default index