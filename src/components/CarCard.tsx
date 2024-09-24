import { ICar } from "../utils/interface";
import LinkButton from "../utils/Button";

const CarCard = ({ car }: { car: ICar }) => {
  return (
    <div className="product-card border rounded-lg p-4 m-4 shadow-lg">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-[200px] object-cover"
      />
      <h3 className="text-lg  my-2 font-bold">{car.name}</h3>
      <p className="text-gray-700">
        {car.description.length > 40
          ? `${car.description.substring(0, 40)}...`
          : car.description}
      </p>
      <p className="text-gray-700 font-semibold mb-4 mt-2">
        <span>Per Hour: </span>${car.pricePerHour}
      </p>
      <LinkButton text="Details" href={`/cars/${car._id}`} />
    </div>
  );
};

export default CarCard;
