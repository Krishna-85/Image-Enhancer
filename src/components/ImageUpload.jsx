import React from 'react'

const ImageUpload = (props) => {

    const ShowImageHandler = (e) => {   
        
        const file = e.target.files[0];

        if(file){
            props.UploadImageHandler(file)
        }

         
    }

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl '>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed p-6 border-gray-300 rounded-lg hover:border-blue-500
        transition-all duration-200 ease-in-out'>
        
        
        <input type="file" id="fileInput" className='hidden' accept="image/*" onChange={ShowImageHandler} />

        <span className='text-lg font-medium text-gray-600'>Click and drag to upload your image</span>
        </label>
    </div>
  )
}

export default ImageUpload
