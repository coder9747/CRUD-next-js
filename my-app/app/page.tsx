import InputComponent from '@/Components/InputComponent'
import React from 'react'
import Link from 'next/link';
import Buttons from '@/Components/Buttons';


const getAllToDo = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/todo", { cache: "no-cache" });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log('error');
    return null;
  }
}

const page = async () => {
  const allData = await getAllToDo();

  function handleDelete() {
    console.log('clicked');
  }


  return (
    <div>
      <InputComponent />
      {allData && allData.map((item: { title: string, description: string, _id: string }) => {
        return <div className='flex flex-col bg-green-300 my-2 p-2 '>
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className='flex justify-around'>
            <Buttons id={item._id} />
          </div>

        </div>
      }
      )}

    </div>
  )
}

export default page
