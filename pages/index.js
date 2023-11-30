import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import UsersList from '../component/UsersList';


export default function Home({users}) {
  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name="keywords" content="user , developers, coding" />
        <meta name="description" content="this page gives you details on various different developers"/>
      </Head>
      
      <div className={styles.container}>
      <div className={styles.title}>
        User Profiles
      </div>
      <UsersList users={users}/>
      
    </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const users=await res.json();

  return {
    props: {
      users
    },
  };
}