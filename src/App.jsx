// import logo from './logo.svg';
import './App.css';
import Acomponent from './component/Acomponent';

// import Parentcomponent from './component/Parentcomponent';

// import NavBar from './component/NavBar';
// import HomeCarousel from './component/HomeCarousel';
// import ImgCard from './component/ImgCard';
//  import data from './component/data'; 
// import Off from './component/Off';
// import { useEffect, useState } from 'react';

  

// const nCard=(val) => {
//   return (
//     <ImgCard
 
//     id={val.id  }
//     title={val.title}
//     imgurl={val.image}
    // desc={val.description} 
//     />
//   )
// }

function App() {

  // const [Data,SetData]=useState([]);

  // useEffect(()=>{
  //   const fetchData=async ()=>{
  //     try{
  //       const response= await fetch(" https://fakestoreapi.com/products");
  //       const data= await response.json();
  //       console.log(data)
  //       SetData(data);
        
  //     }
  //     catch(error){
  //       console.log("error occured",error)
  //     }
  //   };
  //   fetchData();
  // },[]);
  // return (

    
  //   <div  >
  //         <NavBar/>
  //         <HomeCarousel/>

  //         <div className="projectcard"> 
  //         {
  //           Data.map((val,index) => (
  //             <div key={val.id} className='col-md-3'>
  //             {nCard(val)} 
  //             </div>
  //           ))
  //         }
  //         </div>
          
  //         <Off/>
  //   </div>
  // 
      return(
        <div>
        {/* <Parentcomponent/> */}
        <Acomponent/>
      </div>
      );
  // );
} 



export default App;
