import React from 'react'
import '../styles/Home.css'
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
              <a href='/letters'>Letters</a>
          </div>
      </div>
    </div>
  )
}

export default Home