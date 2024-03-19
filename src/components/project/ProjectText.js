import React from 'react'

export default function ProjectText({label, desc}) {
  return (
    <div className='pt-20 pb-8 text-blue'>
        <h1 className='font-bold text-4xl'>{label}</h1>
        <p className='text-xl font-semibold'>{desc}</p>
    </div>
  )
}
