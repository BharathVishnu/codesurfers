import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Task1 = () => {

  const [key,setKey] = useState(""); 
  const router = useRouter(); 

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleClick = () => {
    if(key=='firstislogin') {
        console.log("matched");
        router.push("/lyrastone");
    }
  };  

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-9xl font-bold">TASK 1</h1>
      <div className="flex flex-col items-center mb-8 text-xl">
      ... . -.-. --- -. -.. .. ... .--. .- ... ... .-- --- .-. -..
      </div>
      <div className="flex flex-col items-center mb-8 ml-16 mr-16">
        <p>In today's digital age, coding is often hailed as a vital skill <span className='hover:text-red-500 hover:cursor-pointer'>f</span>or success <span className='hover:text-red-500 hover:cursor-pointer'>i</span>n various fields, from technology to entrepreneurship. However, it's essential to recognize that coding is not the be-all and end-all of modern life. While coding certainly has its merits and can open up opportunities, its importance may be overstated in some contexts. In this article, we'll explore why coding may not be as crucial as commonly perceived and why other skills and attributes are equally, if not more, valuable in today's world.

First and foremost, it's essential to acknowledge that not everyone needs to code. While coding skills can be advantageous in certain professions, many careers do not require programming expertise. For example, roles in fields such as marketing, sales, human resources, and graphic design may prioritize other skills such as creativity, communication, problem-solving, and leadership. In these professions, individuals can excel and achieve success without ever writing a line of code.

Furthermore, the emphasis on coding overlooks the importance of diversity in skill sets. A well-rounded team comprises individuals with a diverse range of abilities, including but not limited to coding. Collaboration across different disciplines is often necessary to tackle complex challenges effectively. By focusing solely on coding, we risk undervaluing the contributions of individuals with expertise in other areas, such as design, business development, project management, and domain-specific knowledge.

Moreover, the rapid evolution of technology means that coding languages and frameworks can become obsolete relatively quickly. While learning to code is undoubtedly valuable for those pursuing careers in software development or related fields, the ability to adapt, learn new skills, and think critically is arguably more important in the long run. Rather than fixating on specific coding languages or technologies, individuals should cultivate a growth mindset and a willingness to continuously learn and adapt to new tools and methodologies.

Additionally, the democratization of technology has led to the emergence of low-code and no-code platforms that enable individuals to create software applications without extensive coding knowledge. These platforms empower non-technical users to develop solutions, automate processes, and bring their ideas to life without the need for deep coding expertise. As these tools become more sophisticated and accessible, the barrier to entry for software development continues to lower, making coding skills less of a prerequisite for innovation and problem-solving.

It's als<span className='hover:text-red-100 hover:cursor-pointer'>o</span> worth noting that coding is just one component of a broader skill set required for success in the digital age. Soft skills such as communication, collaboration, creativity, critical thinking, adaptability, and emotional intelligence are equally, if not more, important in today's interconnected and rapidly changing world. These skills enable individuals to navigate complex social dynamics, communicate effectively with diverse stakeholders, and lead teams to achieve shared goals.

In conclusion, while coding is undoubtedly a valuable skill with numerous applications, its importance should not be overstated. In many contexts, other skills and attributes, such as creativity, communication, problem-solving, adaptability, and domain expertise, are equally essential for success. Rather than focusing solely on coding, individuals should strive to develop a diverse range of skills that enable them to thrive in a rapidly evolving world. By embracing a holistic approach to skill development, we can foster innovation, collaboration, and progress across all fields and industries.
        </p>
      </div>
      <input
        type="text"
        value={key}
        onChange={handleChange}
        placeholder="Enter your text here"
        className="border border-gray-300 rounded-md px-64 py-10 text-black"
      />
       <div
          className="mt-5 md:ml-50 mx-auto md:w-[272px] opacity-[90%] text-md text-center bg-[#6B739D] hover:text-black hover:font-bold hover:bg-white text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl hover:shadow-black transition duration-500 relative overflow-hidden"
           onClick={handleClick}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-20 animate-pulse"></span>
          <span className="relative z-10">NEXT</span>
        </div>
    </div>
  );
};

export default Task1;
