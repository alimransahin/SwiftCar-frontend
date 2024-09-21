import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "Excellent product! Highly recommend it. The quality is top-notch, and the delivery was quick.",
    date: "August 15, 2024",
    image: "https://i.ibb.co/XJ8W2jM/user1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review:
      "Good quality the packaging could have been better. Overall, I am satisfied with the purchase.",
    date: "July 22, 2024",
    image: "https://i.ibb.co/7SFDL3W/user2.jpg",
  },
  {
    id: 3,
    name: "Chris Johnson",
    rating: 5,
    review:
      "Amazing! This product exceeded my expectations. Will definitely again purchase.I am satisfied",
    date: "September 2, 2024",
    image: "https://i.ibb.co/5K5wZpf/user3.jpg",
  },
];

const CustomerReview = () => {
  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gradient-to-br from-[#f0f0f0] to-[#d9e7ff] text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-[#004e92] mb-12">
          What Our Customers Say
        </h2>

        {/* Slick Carousel for Reviews */}
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-8">
              <div className="bg-white shadow-xl p-8 rounded-lg text-center flex flex-col justify-between h-full">
                <div className="flex flex-col items-center mb-4">
                  {/* User Image */}
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  {/* Star Ratings */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 flex-grow">
                    {review.review}
                  </p>
                  <div>
                    <h4 className="font-bold text-xl">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
