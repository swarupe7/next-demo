"use client";
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Todo from '@/components/Todo';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [formData,setFormData] =useState({title:"",description:""});
  useEffect(() =>{
    fetchData();

  },[formData]);
  
  const [todoData,setTodoData] =useState([]);
  const fetchData= async()=>{
    const response =await axios.get('/api');
    setTodoData(response.data.todos);
    console.log(response.data.todos);
  }

  
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData(form=>({...form ,[name]:value}));
    console.log(formData);
  }

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('/api',formData);

    
      toast.success(`${response.data.msg}`);
      setFormData({title:"",description:""});
      
    }catch(error){
      toast.error(`${error}`);

    }

  }


  return (
    <>
    <ToastContainer position="top-right" autoClose={5000}   />
    
    <form  onSubmit={onSubmitHandler}    className='flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto'>
    <h2 className='mx-auto'>TODO</h2>
      <input value={formData.title} onChange={onChangeHandler}  type="text" name="title" placeholder="Title" className='px-3 py-2 border-2 w-full' />
      <textarea onChange={onChangeHandler} value={formData.description} name="description" placeholder="Description" className='px-3 py-2 border-2 w-full'></textarea>
     <button type="submit" className='mx-auto bg-orange-600 py-3 px-11 text-white'>ADD</button>
    </form>


    {

      todoData.length>0 && 
    
   
    
    <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto"  >
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                   Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status 
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>

        <Todo todoData={todoData} fetchData={fetchData}/>
        
        </tbody>

       
    </table>
</div>
}


    
    


    </>
  )
}

export default Home