// import logo from './logo.svg';
import './App.css';

import NavBar from './component/NavBar';
import HomeCarousel from './component/HomeCarousel';
import ImgCard from './component/ImgCard';
import data from './component/data';

  

function App() {
  return  (

    <div>
     <NavBar/>
     <HomeCarousel/>
     
     <div className='projectcard'>
     { 
      data.map((item)=>{
        return <ImgCard className="cards" title={item.title} desc={item.desc} imgurl={item.imgurl }/>
      })
     }
     </div>
    
    </div>
  );
}


export default App;
