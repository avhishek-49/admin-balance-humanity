import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({
    openModal,
    title,
    contents,
    className,
}) => {

    return (
        <div
            className={`${className} rounded divide-y z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 bg-white text-black min-w-[200px] lg:min-w-[80%]`}
        >
            <div className='px-6 py-4 flex justify-between items-center '>
                <div className='text-xl font-medium'>{title}</div>
                <IoMdClose onClick={() => openModal()} className='cursor-pointer ml-auto text-2xl' />
            </div>

            <div className='px-6 py-4'>
                {contents}
            </div>

        </div>
    )
}

export default Modal
