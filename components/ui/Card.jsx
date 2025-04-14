import React from 'react'
import Image from 'next/image'

const Card = ({icon, header, body}) => {
  return (
    <div className="w-[350px] h-fit bg-white rounded-xl shadow-md flex flex-col px-6 py-8 ">
        <div className="bg-brand-50 rounded-lg w-fit p-2 mb-6">
            <Image src={icon} alt='logo' />
        </div>
        {/* Header */}
        <h6 className='text-black font-bold text-xl mb-2'>{header}</h6>
        {/* body */}
        <p className='text-[#616161]  text-lg leading-[32px] pb-3' >{body}</p>
    </div>
  )
}

export default Card