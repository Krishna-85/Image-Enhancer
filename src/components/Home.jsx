import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import Loading from './Loading'
import toast, { Toaster } from 'react-hot-toast'; 
import { enhancedImageAPI } from '../utils/enhanceImage';

const Home = () => {

  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
   
    try {
     
     const enhancedURL = await enhancedImageAPI(file)
     setEnhancedImage(enhancedURL.image)
      setLoading(false)
      toast.success("Image enhanced successfully!")
  
    } catch (error) {
      console.log(error)
      toast.error("Error enhancing image. Please try again.")
    }

  }

  return (
    <>
       <ImageUpload UploadImageHandler={UploadImageHandler}/>
       <ImagePreview 

       loading={loading} 
       uploaded={uploadImage} 
       enhanced={enhancedImage} 
        
       />
    </>
       
    
  )
}

export default Home
