import React from 'react'
import p1 from '../Images/p1.jpeg'

const LoginUser = () => {
  return (
    <div className='loginuser w-40'>
         <img src={p1} className="imguser" alt="..." />
      <div className="logged">
        <p className="username">Franklin jr</p>
        <p className="role">Super Admin</p>
      </div>
      <div class="btngrp">
        <button
          class="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li>
            <a href="/home">Home</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LoginUser