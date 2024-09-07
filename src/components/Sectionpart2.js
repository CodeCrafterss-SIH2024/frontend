import React from 'react'
import logo from '../img/section2img.png'

function Sectionpart2() {
  return (
    <div>
     <div className="flex flex-col md:flex-row items-center p-6 bg-[#cfc4e7]">
    {/* Text and Content */}

     {/* Image */}
     <div className="flex-1 p-4">
      <img src={logo} alt="Section Image" className="ml-[100px] w-[500px] h-[450px]  rounded-lg shadow-lg" />
    </div>


    <div className="flex-1 p-4 text-center md:text-left">
    <h1 className=' text-black  '>Why Join Us?</h1>
    <div className='h-[2px] w-[400px] bg-black'></div>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <p className="text-lg text-gray-700">
      Interactive Learning: Experience the Constitution like never before through our gamified and interactive content that makes learning engaging and fun.
      <br/>

Simplified Content: We break down complex constitutional concepts into easy-to-understand language, ensuring that everyone can grasp the foundational principles of our democracy.
<br/>

Community Engagement: Join a community of like-minded individuals who are passionate about civic education and engage in discussions, debates, and collaborative learning.
<br/>

Customized Learning Paths: Tailor your learning journey according to your interests and pace, with content designed to cater to different levels of understanding.



Continuous Learning: Stay updated with the latest developments in constitutional law and governance, and access resources that help you keep learning.


      </p>
    </div>
    
   
  </div>
    </div>
  )
}

export default Sectionpart2
