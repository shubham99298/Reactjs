import React from 'react'
import Bcomponent from './Bcomponent';
import DataContext from './DataContext';


const Acomponent = () => {
    const vashihathnama="4000 cr";
  return (
  
    <DataContext.Provider value={vashihathnama}>
        <div>
        Acomponent
     
      <Bcomponent/>
    </div>
    </DataContext.Provider>
  )
}

export default Acomponent
