import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import HomeLogo from '../components/HomeLogo'
import Introduction from '../components/Introduction'

function Home() {

  return (
    <div className='HomeContainer'>
      <div className='Home'>
          <HomeLogo/>
          <Introduction/>
          <br></br>
          <div className='link'>
            <Link to="/letters">Previous letters</Link>
          </div>
      </div>
    </div>
  )
}

export default Home