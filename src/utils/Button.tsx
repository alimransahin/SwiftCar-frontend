import React from "react";
import { Link } from "react-router-dom"; // If using React Router

interface LinkButtonProps {
  text: string;
  href: string;
  target?: string; // Optional target for external links
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  target = "_self",
}) => {
  return (
    <Link
      to={href} // Use "href={href}" if not using React Router
      target={target}
      className="inline-block px-6 py-3 bg-primary font-bold text-white  rounded-lg shadow-lg hover:bg-accent hover:text-blue-800 transition duration-500 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
