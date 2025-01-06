import React from 'react'

function CTA() {
	return (
		<div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-screen m-8 slide-left mx-auto" id="cta">
			<h2 className="text-3xl font-bold text-gray-800 mb-4 headingText ">Save the Girl Child Foundation</h2>
			<p className=" text-clementine-500-bg mb-6">
				Your contributions can make a significant impact in the lives of young girls. Join us in our mission to provide education, healthcare, and a brighter future for every girl child.
			</p>
			<div className="flex justify-center space-x-4">
				<button
					className={`bg-[#fd8a12] slide-left text-white font-bold py-2 px-4 rounded transition duration-300 headingText `}
					onMouseEnter={() => setHoverDonate(true)}
					onMouseLeave={() => setHoverDonate(false)}
				>
					Donate Now
				</button>
				<button
					className={`bg-[#fd8a12] slide-right text-white font-bold py-2 px-4 rounded transition duration-300 headingText `}
					
				>
					Volunteer
				</button>
			</div>
		</div>
	);
}

export default CTA