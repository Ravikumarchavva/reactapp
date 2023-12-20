import React from 'react'

const Fotter = () => {
  return (
    <div className='h-[20vh] w-[100vw] bg-[#343c55] flex items-center justify-center text-white'>
        <div className='h-[5vh] w-[80%] flex items-center justify-between opacity-70'>
            <div className='h-[100%] w-[30%]'>
                <h1>Developed with love by Ravikumar &copy; 2023</h1>
            </div>
            <div className='h-[100%] w-[40%] flex justify-around items-center'>
                <a>Terms and Conditions</a>
                <a>Privacy policy</a>
            </div>
        </div>
    </div>
  )
}

export default Fotter