
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  // Array of banner content with meaningful text
  const bannerContent = [
    {
      title: "Explore the Latest Tech",
      description:
        "Discover cutting-edge products and gadgets that enhance your lifestyle.",
      img: "https://i.ibb.co/kcxNKqC/5.jpg",
    },
    {
      title: "Unbeatable Deals",
      description:
        "Save big on our limited-time offers. Grab your favorites now!",
      img: "https://i.ibb.co/G0KBbdN/4.jpg",
    },
    {
      title: "Shop with Confidence",
      description:
        "Enjoy top-notch customer service and easy returns on all purchases.",
      img: "https://i.ibb.co/fxF7Cd1/3.jpg",
    },
    {
      title: "Innovative Products",
      description:
        "Stay ahead with the latest innovations in tech, only at our store.",
      img: "https://i.ibb.co/xgBJhLC/2.jpg",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Get your products delivered right to your doorstep in no time.",
      img: "https://i.ibb.co/QndpTnm/1.jpg",
    },
  ];

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {bannerContent.map((item, index) => (
          <div key={index} className="relative slide">
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover h-[600px]"
            />
            {/* Text overlay with meaningful text and Shop Now button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="text-4xl text-white font-bold">{item.title}</h2>
              <p className="text-lg text-white">{item.description}</p>
              <Link
                to="/products"
                className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white border border-white rounded-lg transition-all hover:bg-gradient-to-br hover:from-[#000428] hover:to-[#004e92] hover:border-transparent"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
