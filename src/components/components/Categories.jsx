import React, { useState } from 'react'

export default function Categories() {
    const [category, setCategory] = useState('')
    const categories = ['Social', 'Business', 'Technology', 'Art', 'Science', 'Health', 'Education', 'Other']
  return (
    <div className='rounded-3xl bg-slate-500'>
      <div>
        <h2 className='text-white text-2xl font-bold'>Select Category</h2>
    
        <div className='grid grid-cols-4 gap-4'>
            {categories.map((cat) => (
                <div
                key={cat}
                onClick={() => setCategory(cat)}
                className={`cursor-pointer p-4 rounded-xl ${
                    category === cat ? 'bg-slate-400' : 'bg-slate-300'
                }`}
                >
                <p className='text-white text-center'>{cat}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

// this is test
