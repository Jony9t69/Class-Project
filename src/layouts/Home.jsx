import React from 'react'
import Navbar from '../Components/Navbar'
import Upper from '../Components/Upper'
import Picture from '../Components/Picture'
import Card from '../Components/Card'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Upper/>
      
    <main>
      <Picture/>
      <Card/>
    </main>
    </div>
  )
}
