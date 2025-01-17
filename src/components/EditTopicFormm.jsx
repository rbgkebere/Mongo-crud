import React from 'react'

export default function EditTopicFormm() {
  return (
    <form action=""
    className='flex flex-col gap-3' >

        <input type="text" placeholder='Topic title' 
        className='border border-slate-500 px-8 py-2'/>
        
        <input type="text" placeholder='Topic description' 
        className='border border-slate-500 px-8 py-2'/>

        <button className='bg-green-500 font-bold text-white
         py-3 px-6 w-fit'>
            Update Topic
        </button>

    </form>
  )
}
