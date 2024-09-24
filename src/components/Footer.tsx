import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" mb-8  bg-accent py-10">
      <div className="container mx-auto px-4 my-2">
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="bg-black text-white hover:text-black hover:bg-white p-2 rounded-md"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="bg-black text-white hover:text-black hover:bg-white p-2 rounded-md"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="bg-black text-white hover:text-black hover:bg-white p-2 rounded-md"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="bg-black text-white hover:text-black hover:bg-white p-2 rounded-md"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <p className=" mx-auto px-4 text-center space-y-4">
        SwiftCar © 2024 All Rights Reserved. Designed by Md. Al Imran.
      </p>
    </footer>
  );
};

export default Footer;
