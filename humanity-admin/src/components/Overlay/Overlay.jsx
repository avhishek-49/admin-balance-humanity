import React from 'react'

const Overlay = ({
    onClick,
    className,
    zVal = "z-[35]"
}) => {
    return (
        <div
            className={`${zVal} OVERLAY bg-black opacity-25 top-0 left-0 w-screen fixed h-screen overflow-hidden ${className}`}
            onClick={onClick}
        ></div>)
}

export default Overlay