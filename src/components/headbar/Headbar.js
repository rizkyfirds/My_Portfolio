import React from 'react'
import Profile from '../../assets/Profile.png';
import ButtonHoverBlue from '../button/ButtonHoverBlue';

export default function Headbar() {
  return (
    <div className='w-full h-full'>
        <div className='px-16 flex h-1/2 bg-white'>
            <div className='flex w-full h-1/2 my-auto'>
                <div className='flex w-1/2 h-full'>
                    <img src={Profile} alt="" className='h-full'/>
                    <p className='px-3 my-auto font-bold text-lg text-blue'>Muhammad Rizky Firdaus</p>
                </div>
                <div className='flex w-1/2 h-full justify-end gap-x-4 text-lg '>
                    <ButtonHoverBlue label={"Experience"}/>
                    <ButtonHoverBlue label={"Project"}/>
                    <ButtonHoverBlue label={"Certificate"}/>
                    <ButtonHoverBlue label={"Contact"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
