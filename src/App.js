//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import UserWidget from './Component/UserWidget';
import UserCollection from './Component/UserCollection';
import RoughWorh from './Component/roughWorh';

function App() {
  return (
    <div className="App" >
      {/* <div className="x"> */}
        {/* <Sidebar/> */}
        {/* <Navbar/> */}
        <UserWidget/>
        {/* <UserCollection/> */}
      {/* </div> */}
      {/* <RoughWorh/> */}
      
    </div>
  );
}

export default App;
