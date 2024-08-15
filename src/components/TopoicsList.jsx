import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { FaEdit } from "react-icons/fa";

export default function TopoicsList() {
  return (
    <>
        <div className='p-4 border  border-slate-300 my-3 flex
        justify-between gap-5 items-start'>

            <div >
                <h2 className='font-bold text-2xl'>Tpoic Title</h2>
                <div>Topic description</div>
            </div>

            <div className='flex flex-row items-center  gap-2'>
                <RemoveBtn/>
                <Link href={'/editTopic/123'}>
                <FaEdit/>
                </Link>
            </div>

        </div>    
    </>
  )
}
