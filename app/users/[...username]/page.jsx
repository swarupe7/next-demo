import Navbar from "@/components/Navbar";
import Link from "next/link";


const page = ({params}) => {
    
    console.log(params);

  return (
    <>
    <Navbar data={params.username[0]} />

<div>
  <Link href="/"> {params.username[0]} </Link>
  </div>
    </>
   
  )
}

export default page