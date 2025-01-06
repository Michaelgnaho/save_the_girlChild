import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Beneficiary",
    quote: "The foundation has changed my life. I now have access to education and a brighter future.",
    image: "https://placehold.co/100x100?text=Amina+Yusuf"
  },
  {
    name: "Dr. Chidi Okeke",
    role: "Supporter",
    quote: "Supporting this foundation has been one of the most rewarding experiences of my life.",
    image: "https://placehold.co/100x100?text=Dr.+Chidi+Okeke"
  },
  {
    name: "Ngozi Nwosu",
    role: "Beneficiary",
    quote: "Thanks to the foundation, I have the resources I need to succeed in school.",
    image: "https://placehold.co/100x100?text=Ngozi+Nwosu"
  },
  {
    name: "Emeka Obi",
    role: "Supporter",
    quote: "I am proud to support a cause that makes such a significant impact in our community.",
    image: "https://placehold.co/100x100?text=Emeka+Obi"
  },
  {
    name: "Fatima Bello",
    role: "Beneficiary",
    quote: "The foundation has given me hope and the tools to build a better future.",
    image: "https://placehold.co/100x100?text=Fatima+Bello"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#ffe0a9] p-6 rounded-lg shadow-lg mx-4">
    <img src={testimonial.image} alt={`Portrait of ${testimonial.name}`} className="w-16 h-16 rounded-full mx-auto mb-4"/>
    <h3 className="text-[#fd8a12] text-lg font-bold text-center">{testimonial.name}</h3>
    <p className="text-center text-sm text-gray-700">{testimonial.role}</p>
    <p className="text-center mt-4 text-gray-800">{testimonial.quote}</p>
  </div>
);

function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="max-w-screen py-6 mx-auto py-12 px-4 sm:px-6 slide-left lg:px-8" id="testimonials">
      <h2 className="text-3xl font-bold text-center headingText mb-8">Testimonials</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;