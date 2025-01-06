// import {useState} from 'react'

const features = [
	{
		title: "Educational Scholarships",
		description: "Providing scholarships to underprivileged girls to ensure they have access to quality education.",
		icon: "fas fa-graduation-cap",
		img: "https://placehold.co/100x100?text=Scholarship+Icon"
	},
	{
		title: "Health and Nutrition",
		description: "Ensuring girls receive proper healthcare and nutrition to grow and thrive.",
		icon: "fas fa-heartbeat",
		img: "https://placehold.co/100x100?text=Health+Icon"
	},
	{
		title: "Skill Development",
		description: "Offering skill development programs to empower girls with vocational skills.",
		icon: "fas fa-tools",
		img: "https://placehold.co/100x100?text=Skill+Development+Icon"
	},
	{
		title: "Advocacy and Awareness",
		description: "Raising awareness about the importance of girl child education and rights.",
		icon: "fas fa-bullhorn",
		img: "https://placehold.co/100x100?text=Advocacy+Icon"
	},
	{
		title: "Safe Spaces",
		description: "Creating safe spaces where girls can learn, play, and grow without fear.",
		icon: "fas fa-shield-alt",
		img: "https://placehold.co/100x100?text=Safe+Spaces+Icon"
	}
];
function Project() {
    return (
		<div className="container mx-auto py-12 slide-right px-4" id="programs">
			<h2 className="text-3xl font-bold headingText mb-8 text-center">Our Key Programs and Initiatives</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<div className="flex items-center mb-4">
							<img src={feature.img} alt={`Icon representing ${feature.title}`} className="w-12 h-12 mr-4"/>
							<h3 className="text-xl font-semibold text-clementine-500-bg">{feature.title}</h3>
						</div>
						<p className="text-clementine-500-bg">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Project