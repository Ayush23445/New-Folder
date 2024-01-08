//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import UserWidget from './Component/UserWidget';
import UserCollection from './Component/UserCollection';
import RoughWorh from './Component/roughWorh';
import Pagination from './Component/Pagination';
import Main from './Component/Main';
import LoginForm from './Component/LoginForm';

function App() {
  return (
    <div /*className="flex container w-auto" */>

      {/* <Sidebar />

      <Main /> */}
      <LoginForm/>
    </div>
  );
}

export default App;
