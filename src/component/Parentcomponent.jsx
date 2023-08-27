import React from 'react'
import Childcomponent from './Childcomponent'
import { useState } from 'react';

const Parentcomponent = () => {
    const [data,setdata]=useState(null);
    const HandleChild=(children)=>{
           setdata(children)
    }
  return (
    <div>

      <Childcomponent onDatafromChild={HandleChild}/>

      <p>{data}</p>
         
    </div>
  )
}

export default Parentcomponent
