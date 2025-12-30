import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './css/references.css'
import RefCard from './subComponents/refCard'
import ref1 from '../assets/ref001.png';

const References = () => {
    const location = useLocation()
    useEffect(()=>{
        const hash = location.hash.slice(1)
        if(hash){
            const element = document.getElementById(hash);
            console.log(element)
            if(element){
                element.scrollIntoView()
            }
        }
    },[location.hash])

    let [selectedImage, setSelectedImage] = useState(null);

    



    
    
  return (
    <div id="references">
        <h1 className='topic'>
            References
        </h1>
        <div id='refCont'>
            {selectedImage && 
            
            <div id="fullscreenPic" onClick={()=>{setSelectedImage(null)}}>
                <img src={selectedImage} alt="" />
            </div>
            
            }
            
            <RefCard 
                image={ref1}
                name="Mrs.T Kealotswe"
                onOpen={()=>setSelectedImage(ref1)}
            
            />


        </div>
    </div>
  )
}

export default References