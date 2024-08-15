import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between  items-center
     bg-slate-800 px-8 py-3'>

        <Link className='text-white font-bold' href={'/'}>
        Craftycoder.
        </Link>

        <Link className='bg-white p-2' href={'/addTopic'}>
        Add Topic
        </Link>
    </div>
  )
}
