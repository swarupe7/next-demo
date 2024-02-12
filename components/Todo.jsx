import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';




const Todo = ({todoData,fetchData}) => {
   const deleteTodo=async(mongoId)=>{
    const response=await axios.delete('/api',{
        params:{
            mongoId:mongoId
        }
    })
    toast.success(response.data.msg);
    fetchData();
   }

   const editTodo=async(mongoId)=>{
    const response=await axios.put('/api',{},{
        params:{
            mongoId:mongoId
        }
    })
    toast.success(response.data.msg);
    fetchData();
   }

  return (
          <>
           {
            todoData.length>0 && 
                
                todoData.map((data,index)=>(
                    <tr id={data._id} className="bg-white border-b ">
                <td scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    {index+1}
                </td>
                <td className="px-6 py-4">
                {data.title}
                </td>
                <td className="px-6 py-4">
                {data.description}
                </td>
                <td className="px-6 py-4">
                {data.isCompleted ? "Completed" : "Pending"}
                </td>
                <td className="px-6 py-4 flex gap-1">
              {!(data.isCompleted) &&  <button className='py-2 px-4 bg-blue-500 text-white' onClick={()=>editTodo(data._id)}>DONE</button>}
                   <button className='py-2 px-4 bg-red-500 text-white' onClick={()=>deleteTodo(data._id)}>DEL</button>
                   
                </td>
            </tr>


                ))
                

            
           }
            

            </>
            
    
  )
}

export default Todo