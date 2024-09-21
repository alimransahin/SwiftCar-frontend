import { Link } from "react-router-dom";
import { IProduct } from "../../utils/interface";

const CategoryCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(product.category)}`} // Navigating to products page with category filter
      className="relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={product.images[0]} // Display the first product image
        alt={product.category} // Alt text based on the category
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{product.category}</h3>{" "}
        {/* Display the category name */}
      </div>
    </Link>
  );
};

export default CategoryCard;
