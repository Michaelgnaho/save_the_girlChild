import React from 'react'

const teamMembers = [
	{
		name: "Comfort Olaofare",
		role: "Founder & CEO",
		description: "comfort has been leading the foundation since its inception, driving initiatives to support and empower young girls in Nigeria.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagOU32U_GpCzXSIgI4btpdrn9Qv_tgkxJ-Q&s"
	},
	{
		name: "Giwa Rukayat",
		role: "Program Director",
		description: "Rukayat oversees all programs and ensures they align with the foundation's mission to educate and protect young girls.",
		image: "https://placehold.co/300x300?text=John+Smith&bg=ffc872"
	},
	{
		name: "Mary Johnson",
		role: "Community Outreach Coordinator",
		description: "Mary works closely with local communities to spread awareness and provide resources for the protection of girl children.",
		image: "https://placehold.co/300x300?text=Mary+Johnson&bg=ffc872"
	},
	{
		name: "James Abiodun",
		role: "Fundraising Manager",
		description: "James is responsible for organizing fundraising events and securing donations to support the foundation's projects.",
		image: "https://placehold.co/300x300?text=James+Williams&bg=ffc872"
	},
	{
		name: "Patricia Brown",
		role: "Volunteer Coordinator",
		description: "Patricia manages the foundation's volunteers, ensuring they are well-trained and motivated to support our cause.",
		image: "https://placehold.co/300x300?text=Patricia+Brown&bg=ffc872"
	}
];
function Team() {
	return (
		<div className="container mx-auto slide-right py-12 px-4" id="team">
			<h2 className="text-4xl font-bold text-center headingText  mb-8">Meet Our Team</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{teamMembers.map((member, index) => (
					<div key={index} className="bg-[#ffc872] p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
						<img src={member.image} alt={`Photo of ${member.name}`} className="w-full h-48 object-none roundedlg mb-4" />
						<h3 className="text-2xl font-bold text-[#fd8a12] mb-2">{member.name}</h3>
						<h4 className="text-xl text-gray-800 mb-2">{member.role}</h4>
						<p className="text-gray-700">{member.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Team