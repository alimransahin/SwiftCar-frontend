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
      to={href}
      target={target}
      className="inline-block transition-colors px-6 py-3 from-primary  to-[#424242]  font-bold text-white rounded-lg shadow-lg bg-gradient-to-r hover:from-accent hover:to-primary hover:text-black"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
