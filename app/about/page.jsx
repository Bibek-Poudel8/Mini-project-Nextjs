import React from 'react'

const About = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
          About Us
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
          Learn more about Us, Our services.
        </p>
        <div className='prose prose-lg mx-auto'>
          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <h2 className='text-2xl font-semibold mb-4'>Our Story</h2>
            <p className=' text-gray-700 mb-6'>
              Our mission is to provide high-quality web solutions that empower
              businesses to thrive in the digital age. We are committed to
              delivering innovative and user-friendly websites that meet the unique
              needs of our clients.
            </p>
            <p className=' text-gray-700 mb-6'>
              Our mission is to provide high-quality web solutions that empower
              businesses to thrive in the digital age. We are committed to
              delivering innovative and user-friendly websites that meet the unique
              needs of our clients.
            </p>
          </div>

        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-8 mt-5'>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
            <p className=' text-gray-700 mb-6'>
              Our mission is to provide high-quality web solutions.
            </p>
            
          </div>
          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <h2 className='text-2xl font-semibold mb-4'>Our Vision</h2>
            <p className=' text-gray-700 mb-6'>
              Our mission is to provide high-quality web solutions that empower
              businesses to thrive in the digital age. We are committed to
              delivering innovative and user-friendly websites that meet the unique
              needs of our clients.
            </p>
           
          </div>


        </div>

      </div>

    </div>
  )
}

export default About
