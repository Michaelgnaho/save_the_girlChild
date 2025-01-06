import React from 'react'
import vid from "../assets/bgVid.mp4"

function Home() {
	return (
		<div className="relative bg-clementine-50-bg h-screen flex items-center justify-center" id="hero">
			 <video 
    autoPlay 
    loop 
    muted 
    className="absolute inset-0 w-full h-full border-white  object-strech opacity-50"
  >
    <source src={vid} type="video/mp4"   />
    Your browser does not support the video tag.
  </video>
			<div className="relative z-10 text-center p-6 bg-white bg-opacity-75 rounded-lg shadow-lg slide-right">
				<h1 className="text-4xl md:text-6xl font-bold text-[#7e3710] mb-4">
				ADUNNI SAVE A GIRL FOUNDATION

				</h1>
				<p className="text-lg md:text-2xl text-gray-700 mb-6 text-clementine-500-bg">
					Empowering young girls and nurturing them for Self-Actualization
				</p>
				<button className=" headingText font-bold py-3 px-6 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105">
					Learn More
				</button>
			</div>
		</div>
	);
}

export default Home