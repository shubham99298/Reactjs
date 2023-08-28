import React, { useContext } from 'react'
import DataContext from './DataContext'


const Dcomponent = () => {
    const sharedData=useContext(DataContext)
  return (
    <div>
      Dcomponent
      <p>property recieved from grandarent :-{sharedData}
      </p>
    </div>
  )
}

export default Dcomponent
