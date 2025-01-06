import React from 'react'

function Footer() {
	return (
		<footer className="bg-[#7e3710] text-white py-10" id="footer">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<img src="https://placehold.co/150x50" alt="Save the Girl Child Foundation logo with a silhouette of a girl and the foundation's name" className="mb-4"/>
						<p className="text-sm">
							Our mission is to empower and educate young girls in Nigeria, providing them with the resources and support they need to thrive.
						</p>
					</div>
					<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
						<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">About Us</a>
						<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">Donate</a>
						<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">Programs</a>
						<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">Contact</a>
					</div>
				</div>
				<div className="mt-6 flex justify-center space-x-4">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">
						<i className="fab fa-facebook-f text-2xl"></i>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">
						<i className="fab fa-twitter text-2xl"></i>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">
						<i className="fab fa-instagram text-2xl"></i>
					</a>
				</div>
				<div className="mt-6 text-center text-sm">
					<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300">Terms of Use</a> | 
					<a href="#" className="text-[#e96c08] hover:text-[#fd8a12] transition duration-300"> Privacy Policy</a>
					<p className="mt-2">&copy; 2023 Save the Girl Child Foundation. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer