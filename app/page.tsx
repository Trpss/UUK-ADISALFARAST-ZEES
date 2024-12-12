import React from 'react'
import Navbar from '@/app/component/Navbar'
import Login from '@/app/component/Login'

function page() {
  return (
    <>
    <section className='pt-36 pb-32'>
        <Navbar/>
    </section>
    <section className='pt-36 pb-32'>
        <Login/>
    </section>
    </>
  )
}

export default page