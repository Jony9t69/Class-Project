import React from 'react'
import Navbar from '../Components/Navbar'
import Upper from '../Components/Upper'
import Picture from '../Components/Picture'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar/>
      <Upper/>
      
    <main>
      <Picture/>
      <Card/>
    </main>
    <Footer/>
    </div>
  )
}
