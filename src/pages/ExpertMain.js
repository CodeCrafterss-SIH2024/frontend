import React, { useState } from 'react';
import ExpertSlide from './ExpertSlide';
import sih1 from '../img/sihp1.jpg'
import sih2 from '../img/sihp2.jpg'
import sih3 from '../img/sihp3.jpg'
function ExpertMain() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const experts = [
      // Add your expert data here
      { id: 1, name: 'Dr. A.B Patel ', description: '[Expert in Constitutional Law]    Dr. A. B. Patel is a renowned expert in constitutional law with over 20 years of experience in teaching and advising on legal matters related to the Indian Constitution. His expertise spans constitutional amendments, judicial interpretations, and human rights issues. Dr. Patel has published numerous papers and has been a keynote speaker at various national and international conferences.', imageUrl:sih1 , contactInfo: 'Email: abpatel@2314.com Phone: +91 87634 67890' },
      { id: 2, name: ' Mr. C.D Sharma', description: ' [Civil Rights Lawyer]   Ms. C. D. Sharma is a passionate civic education advocate dedicated to promoting awareness and understanding of constitutional rights among students and young adults. With a background in educational psychology and curriculum development, she has designed numerous interactive programs and workshops that engage and educate participants on the fundamental principles of the Indian Constitution.', imageUrl:sih2, contactInfo: 'Email: cdsharma@y76ample.com  Phone: +91 98701 54321' },
      { id: 1, name: 'Mr. E.F khan ', description: '[Human Right Activist]     Mr. E. F. Khan is a distinguished human rights activist known for his tireless work in advocating for marginalized communities and ensuring their rights are upheld. With a background in international law and a history of involvement in various human rights organizations, Mr. Khan has played a crucial role in shaping policies and raising awareness on critical issues related to human rights and social justice.', imageUrl:sih3 , contactInfo: 'Email: efkhan98@tf87e.com  Phone: +91 86543 44556' },
 

      // More experts...
    ];
  
    const totalSlides = experts.length;
  
    const changeSlide = (direction) => {
      setCurrentSlide((prevSlide) => (prevSlide + direction + totalSlides) % totalSlides);
    };
  
  return (
    <div className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">Our Experts</h2>
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {experts.map((expert, index) => (
            <ExpertSlide key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
      <button onClick={() => changeSlide(-1)} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-900">
        Prev
      </button>
      <button onClick={() => changeSlide(1)} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-900">
        Next
      </button>
    </div>
  </div>
  )
}

export default ExpertMain
