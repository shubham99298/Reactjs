import React from 'react'

const Childcomponent = ({ onDatafromChild }) => {
  
    const sendDatatoParent=()=>{
        const data="logged in";
        onDatafromChild(data);
    }
  return (
    <div>
    <div>child component</div>
    <button onClick={sendDatatoParent}>send</button>
  
    </div>
  )
  
}

export default Childcomponent
