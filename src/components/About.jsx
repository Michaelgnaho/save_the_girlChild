import React from 'react'

function About() {
	return (
		<div className="bg-clementine-50-bg py-12 " id='about'>
			<div className="max-w-7xl mx-auto px-4 ani sm:px-6 lg:px-8">
				<div className="text-center slide-middle mb-12">
					<h2 className="text-3xl md:text-5xl font-bold headingText mb-4 slide-right">
						Our Mission
					</h2>
					<p className="text-lg md:text-xl text-clementine-500-bg ">
						At Save the Girl Child Foundation, we are dedicated to empowering young girls in Nigeria to achieve their dreams and build a brighter future.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-left">
					<div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-105">
						<img 
							src="https://placehold.co/100x100" 
							alt="Icon representing education with a book and graduation cap" 
							className="mx-auto mb-4"
						/>
						<h3 className="text-2xl font-bold text-clementine-500-bg mb-2">
							Education
						</h3>
						<p className="text-clementine-500-bg">
							Over 10,000 girls provided with quality education and learning resources.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-105">
						<img 
							src="https://placehold.co/100x100" 
							alt="Icon representing healthcare with a stethoscope and heart" 
							className="mx-auto mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2 text-clementine-500-bg">
							Healthcare
						</h3>
						<p className="text-clementine-500-bg">
							Access to healthcare services for over 5,000 girls in rural areas.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-105">
						<img 
							src="https://placehold.co/100x100" 
							alt="Icon representing empowerment with a raised fist" 
							className="mx-auto mb-4"
						/>
						<h3 className="text-2xl font-bold text-clementine-500-bg mb-2">
							Empowerment
						</h3>
						<p className="text-gray-700 text-clementine-500-bg">
							Empowering over 8,000 girls through skill development and mentorship programs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;