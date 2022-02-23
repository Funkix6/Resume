import React from "react";

const ProgressBar = ({progress}) => {
    return(
        <div className='bg-gray-300 w-full h-2'>
            <div 
                style={{ width: `${progress}%`}}
                className={`bg-[#4a4e69] h-full`} >
            </div>
        </div>
    )
}

export default ProgressBar;