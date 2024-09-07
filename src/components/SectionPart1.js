import React from 'react'
import logo from '../img/section1img.png'
import '../components/Firstloader.css'
function SectionPart1() {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 ">
    {/* Text and Content */}
    <div className="flex-1 p-4 text-center md:text-left">
    <h1 className=' text-black  '>About Us</h1>
    <div className='h-[2px] w-[300px] bg-black'></div>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <p className="text-lg text-gray-700">At Sansthaein Aur Samvidhan, we are passionate about empowering citizens through knowledge of the Constitution of India. Our mission is to simplify and demystify the pillars of the Constitution—the Legislature, Executive, and Judiciary—so that every citizen, regardless of age or background, can understand their rights, duties, and the functioning of their government. We believe that an informed citizenry is the cornerstone of a strong democracy, and we aim to make constitutional literacy not just accessible but also engaging and fun.
      <br/>
      <br/>
      Our approach is innovative, blending education with interactivity. Through a mix of gamified content, quizzes, interactive modules, and community-driven activities, we make learning about the Constitution an enjoyable experience.Whether you’re a student, a professional, or simply a curious citizen, Sansthaein Aur Samvidhan offers a platform where you can deepen your understanding of the laws that shape our society and learn how to actively participate in the democratic process.
</p>
    </div>
    
    {/* Image */}
    <div className="flex-1 p-4">
      <img src={logo} alt="Section Image" className=" ml-[100px] w-[500px] h-[450px]  rounded-lg shadow-md" />
    </div>
  </div>
  )
}

export default SectionPart1
