
import React, { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { useHomePageProducts } from '../redux';
import { Button ,Box} from '@mui/material';

import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {MdOutlineArrowForwardIos} from "react-icons/md"



export const SliderComp=()=>{

const SliderData = [
       
         
        {
            Image:
            'https://cdn.shopify.com/s/files/1/1414/6988/files/Seattle_coffee_roasters_best_coffee_roasters_seattle_coffee_roastery_seattle_coffee_roasters_seattle_coffee_roaster_Capitol_Hill_seattle_coffee_capital_hill_seattle_best_coffee_beans_in_seattle_seattl_1944x.jpg?v=1613797004',
            add:"NEED-IT-NOW",
            description:'contemporary,minimal, and beautifully iconic',
            title:"Start a day with coffee"
            
        },
        {
            // Image:
            // 'https://cdn.metropole.com.au/wp-content/uploads/2022/03/coffee2.jpg',

            Image:
            "https://images8.alphacoders.com/831/831931.jpg",
            add:"dont miss today's featured deals",
            description:'here to bring your lifestyle to the next level',
            title:"Start a day with coffee"
        },
        {
           
            
            Image:
            'https://theamericanomp.com/wp-content/uploads/2020/03/great-coffee-bean.jpeg' ,

           
            
            add:"new day, new taste ",
            description:'Havent Tried BioWillys? That s A Depresso...Give It A Shot',
            title:"Start a day with coffee"
        },
       
      ];



 const CarouselItem = ({children,width}) => {
  return (
    <div className="carousel-Item" style={{ width:width }}>
      {children}
    </div>
  );
};

 const Carousel=({children,Image,description,add,title})=>{
    const [activeIndex,setActiveIndex]=useState(0);
    const [paused,SetPaused]=useState(false);
    const updateIndex=(newIndex)=>{
        if(newIndex<0){
            newIndex=React.Children.count(children)-1;
        } else if (newIndex>= React.Children.count(children)){
            newIndex=0;
        }

        setActiveIndex(newIndex);
    };
    useEffect(()=>{
       
        const interval=setInterval(()=>{
            if(!paused){
                updateIndex(activeIndex+1);
            }
            
        },2000);
       
        return()=>{
            if(interval){
                clearInterval(interval);
            }
        };
    });
    const handlers=useSwipeable({
        onSwipedLeft:()=>updateIndex(activeIndex+1),
        onSwipedRight:()=>updateIndex(activeIndex-1)
    });
    return (
        {...handlers},
        <div className="carousel"
        onMouseEnter={()=>SetPaused(true)}
        onMouseLeave={()=>SetPaused(false)}  >
            <div className="inner"  style={{ transform: `translateX(-${activeIndex*100}%)` }}>
                {React.Children.map(children, (child,index)=>{
                    return React.cloneElement(child,{width:"100%"});
                })}

            </div>

            <div className="indicators">
                <button onClick={()=>{updateIndex(activeIndex-1)}}>
                    <MdOutlineArrowBackIosNew/>
                </button>

                {React.Children.map(children,(child,index)=>{
                    return(
                        <button className={`${index===activeIndex ? "active" : ""}`}
                        
                        onClick={()=>{
                            updateIndex(index);
                        }}>
                            {/* {index + 1} */}
                             </button>
                    )
                })}

                <button onClick={()=>{updateIndex(activeIndex+1)}}>
                   <MdOutlineArrowForwardIos/>
                </button>
            </div>

        </div>
    )

} 
return(

<Carousel >
 {SliderData.map((item)=>{ return <CarouselItem>  <Box sliderImg> <img className='sliderImg' src={item.Image} alt={` ${item.description}`}  ></img></Box>
 <span className='sliderDescription'>{item.description}</span>
 <span className=' slideradd'> {item.add}</span>
 <span className='slidertitle'> {item.title}</span>
 
 </CarouselItem>})}


</Carousel>


)

}