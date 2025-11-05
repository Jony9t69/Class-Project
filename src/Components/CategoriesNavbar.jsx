import React from 'react'

const CategoriesNavbar = ({ categories }) => {
  return (
    <div>
      {
        categories.map((cat,index) =>(
            <button className='px-4 py-2 rounded-2xl font-medium transition-all duration-300' key={index}>{cat}</button>
        )
        )
      }
    </div>
  )
}

export default CategoriesNavbar
