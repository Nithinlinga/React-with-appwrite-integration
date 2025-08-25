import React from 'react'

const Button = ({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) => {
  return (
    <div {...props} className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}>{
        children
    }</div>
  )
}

export default Button