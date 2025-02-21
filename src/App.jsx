import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Pricing1 from './components/Pricing1'
import Features from './components/Features'
import SwipeCarousel from './components/Hero3'
import Form from './components/Form'
import Reviews from './components/Reviews'
import Footer from './components/Footer'



const App = () => {

const [selectedFan, setSelectedFan] = useState(1);


const handleDecrement = () => {
  setSelectedFan(prevFan => {
    console.log('Decrement:', prevFan - 1);

    if(prevFan >1 ){
      return prevFan -1;
    }

    return prevFan;

  });
};


const handleIncrement = () => {
  setSelectedFan(prevFan => {
    console.log('Increment:', prevFan + 1);
    return prevFan + 1;
  });
};

  return (
    <div className=' bg-gradient-to-b from-blue-100 to-white'>
      <Topbar/>
      <SwipeCarousel />
      <Pricing1 selectedFan={selectedFan} setSelectedFan={setSelectedFan} /> 
     <Features />
     <Reviews />
       <Form selectedFan={selectedFan} 
        setSelectedFan={setSelectedFan} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}  /> 
       <Footer/>
    </div>
  )
}

export default App
