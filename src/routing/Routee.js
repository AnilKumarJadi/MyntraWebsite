import React from 'react';
import{Routes,Route} from"react-router-dom"
import Kids from '../navbar/Kids';
import Home_Living from '../navbar/Home&Living';
import Studio from '../navbar/Studio';
import Beauty from '../navbar/Beauty';
import Bag from '../login&whishList/Bag';
import Login from '../login&whishList/Login';
import Registration from '../login&whishList/Registration';
import WhishList from '../login&whishList/WhishList';
const Home=React.lazy(()=>import ('../navbar/Home'));
const Men=React.lazy(()=>import('../navbar/Men'));
const Women=React.lazy(()=> import( '../navbar/Women'));

const Routee = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/homeliving' element={<Home_Living/>} />
        <Route path='/studio' element={<Studio/>} />
        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/bag' element={<Bag/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/whishlist' element={<WhishList/>}/>
      </Routes>

    </div>
  );
}

export default Routee;
