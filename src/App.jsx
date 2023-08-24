// import logo from './logo.svg';
import './App.css';

import NavBar from './component/NavBar';
import HomeCarousel from './component/HomeCarousel';
import ImgCard from './component/ImgCard';import data from './component/data';
import Off from './component/Off';

  

const nCard=(val) => {
  return (
    <ImgCard
 
    title={val.title}
    imgurl={val.imgurl}
    desc={val.desc}
    />
  )
}
function App() {
  return (
    <div className='container'>
          <NavBar/>
          <HomeCarousel/>
          <div className="projectcard">
          {
            data.map((val,index) => (
              <div key={val.id} className='col-md-3'>
              {nCard(val)} 
              </div>
            ))
          }
          </div>
          <Off/>
    </div>
  );
}



export default App;
