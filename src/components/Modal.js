import React from 'react';
import {motion} from 'framer-motion'

export const Modal=({selectedImage,setSelectedImage})=>{
    console.log('ok')

    const handleClick=(e)=>{
        if(e.target.classList.contains('backdrop'))
            setSelectedImage(null)
    }
    return(
        <div className="backdrop" onClick={handleClick}>
            <motion.img src={selectedImage} alt="nagyított fotó"
                initial={{y:"-100vh"}}
                animate={{y:0}}
            />
        </div>
    )
}