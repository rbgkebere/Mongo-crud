import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function RemoveBtn() {
  return (
    <button className='text-red-400'>
        <FaTrashAlt size={16}/>
    </button>
  )
}
