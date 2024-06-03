import React from 'react'

const InputComponent = () => {
  return (
    <div className='flex flex-col px-10 gap-1 h-28 my-2'>
      <input placeholder='Enter To Do Item ' className='bg-slate-100 rounded-xl px-3 grow' type="text" />
      <button className='bg-green-300 w-32 my-2  mx-auto rounded-xl grow'>Add Button</button>
    </div>
  )
}

export default InputComponent
