import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "wxl31d80uelsm0axc";
const BASE_URL = "https://techhk.aoscdn.com/"

export const enhancedImageAPI = async (file) =>{
    try {
        
      const taskId = await uploadImage(file);
      console.log("image uploaded successfully, taskId:", taskId);

      const enhancedImageData = await  PollForEnhancedImage(taskId);
      console.log("enhanced image data:", enhancedImageData);

      console.log(enhancedImageData);
      return enhancedImageData
    } catch (error) {
        console.error("Error enhancing image:", error);
        throw error;
        
    }
}


const uploadImage = async (file) => {
    
    const formData = new FormData();
    formData.append("image_file", file);
       
    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },  
    })

    if (!data || !data.data || !data.data.task_id) {
        throw new Error("Invalid response from server");
    }

    return data.data.task_id;
    
}
const fetchEnhancedImage = async (taskId) => {
  //fetch inhanced image from server
  
  const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
         
        "X-API-KEY": API_KEY,
    },  
})

    if (!data?.data) {
        throw new Error("Invalid response from server");
    }

   return data.data;
}



const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result  = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log("Processing...")

        if(retries >= 20){
            throw new Error("Max retries reached Please try again later");
        }

        // wait for 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));

        return PollForEnhancedImage(taskId, retries + 1);
    }
    return result;
}

 

// {status: 200, message: 'success', data: {…}}
// data
// : 
// {task_id: 'af737d2b-6e9a-4f7c-9e40-595c71103788'}
// message
// : 
// "success"
// status
// : 
// 200

 

