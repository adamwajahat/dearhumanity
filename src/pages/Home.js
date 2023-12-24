import React from 'react'
import '../styles/Home.css'
import HomeLogo from '../components/HomeLogo'
import Introduction from '../components/Introduction'

function Home() {

  return (
    <>
        <HomeLogo/>
        <Introduction/>
        <br></br>
        <div className='link'>
            <a href='/letters'>Letters</a>
        </div>
    </>
  )
}

export default Home