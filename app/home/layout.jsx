import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className=''>
      <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default layout