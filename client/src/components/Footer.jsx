import React from 'react';
import { Link } from "react-router-dom";

import { faYouTube } from '@fortawesome/free-brands-svg-icons'


export default function NavBar() {

  return (
    <footer className='row p-5 mt-5 justify-content-around mx-0 position-relative fixed-bottom' style={{ backgroundColor: "#184374" }}>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          
        </div>
      </div>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <div className=''>
        
        
        

        </div>
      </div>
      <p class="text-center" style={{ color: '#E1E3EC' }}>Copyright © 2022 - Alejandro Díaz</p>
    </footer>
  )
}