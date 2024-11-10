import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import { ICarResponse } from "../utils/interface";
import { useGetSingleCarQuery } from "../redux/api/carApi";
import NoCarFound from "../pages/errorPage/NoCarFound";
import SomethingWrong from "../pages/errorPage/SomethingWrong";
import { useState } from "react";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate(`/user/all-car/book-car/${id}`);
  };

  const {
    data: getCar,
    error,
    isLoading,
  } = useGetSingleCarQuery(id) as {
    data: ICarResponse;
    error: any;
    isLoading: boolean;
  };
  const car = getCar?.data;

  // State to manage the main image being displayed
  const [mainImage, setMainImage] = useState(car?.img);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!car) return <NoCarFound />;
  if (error) {
    return <SomethingWrong />;
  }

  // Additional car images for the gallery
  const carImages = [
    car?.img,
    "https://img1.wsimg.com/isteam/ip/c8db9039-2b27-4e98-bd5f-4de97616c4c3/9e42d36e-e440-4eee-9970-86575b2aa822.jpeg/:/cr=t:16.73%25,l:0%25,w:100%25,h:66.54%25/rs=w:600,h:300,cg:true",
    "https://img1.wsimg.com/isteam/ip/c8db9039-2b27-4e98-bd5f-4de97616c4c3/c9b7d6b5-b2c0-4fb8-a7fa-ea13a37f1ee7.jpeg/:/cr=t:12.43%25,l:0%25,w:100%25,h:75.14%25/rs=w:600,h:300,cg:true",
    "https://img1.wsimg.com/isteam/ip/c8db9039-2b27-4e98-bd5f-4de97616c4c3/b0a1fc20-24ce-41c7-9ba4-2c71309e7c49.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
  ];
  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      comment: "Great experience, the car was in excellent condition!",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Very smooth ride and easy booking process.",
    },
    {
      name: "Mike Johnson",
      rating: 4.5,
      comment: "The car was comfortable and affordable.",
    },
  ];

  return (
    <div className="container my-12 lg:my-20 mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        {/* Car Image Gallery Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={mainImage}
            alt="Main Car Image"
            className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {carImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Car Image ${index + 1}`}
                onClick={() => setMainImage(image)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  mainImage === image ? "border-2 border-primary" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Car Details Section */}
        <div className="w-full md:w-1/2 text-start">
          <h1 className="text-4xl font-extrabold text-[#000428] mb-4">
            {car.name}
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            <span className="font-bold text-accent">${car.pricePerHour}</span>
            /hour
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {car.description}
          </p>
          <div className="text-md text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">Features</span>
            <ul className="list-disc list-inside pl-4">
              {car?.features?.map((feature) => (
                <li key={feature} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-md text-gray-600 mb-4 font-bold">
            <span className="text-gray-900">Status: </span>
            {car.status === "available" ? (
              <span className="text-green-600">Available</span>
            ) : (
              <span className="text-red-600">Unavailable</span>
            )}
          </p>
          <div className="flex mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
          </div>
          <div className="flex items-center align-middle space-x-4 mb-6">
            {car.status === "available" ? (
              <button
                onClick={handleBookNow}
                className="inline-block transition-colors px-6 py-3 from-primary to-[#424242] font-bold text-white rounded-lg shadow-lg bg-gradient-to-r hover:from-accent hover:to-primary hover:text-black"
              >
                Book Now
              </button>
            ) : (
              <button
                className="bg-gray-300 text-gray-600 inline-block transition-colors px-6 py-3 font-bold rounded-lg shadow-lg"
                disabled
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow flex items-start space-x-4"
            >
              <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg">
                {review.name[0]}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </span>
                  <span className="ml-3 text-yellow-500 text-sm">
                    {"★".repeat(Math.floor(review.rating))}
                    {"☆".repeat(5 - Math.floor(review.rating))}
                  </span>
                  <span className="ml-2 text-gray-600 text-sm">
                    ({review.rating} rating)
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
