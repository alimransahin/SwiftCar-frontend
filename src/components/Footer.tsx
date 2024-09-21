import {
  Mail,
  MapPinCheckInside,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000428] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">SwiftCar</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Complaint Box
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Branches & Pickup Points
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Repair and Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                EMI
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">
            Customer Information
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Glossary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Order Procedure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Home Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Return, Refund & Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Payment Method
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">Contact Us</h2>
          <ul className="space-y-2">
            <li className="grid grid-cols-[auto_1fr] gap-2 items-center">
              <MapPinCheckInside size={20} className="text-blue-400" />
              <span>
                Kusholi Bhaban, 4th Floor, 238/1 Begum Rokeya Sharani, Agargaon,
                Dhaka-1207
              </span>
            </li>
            <li className="grid grid-cols-[auto_1fr] gap-2 items-center">
              <Phone size={20} className="text-blue-400" />
              <div>
                <a href="tel:+88096225566" className="hover:text-blue-400">
                  +88096226595
                </a>
                ,
                <a href="tel:+88096225566" className="hover:text-blue-400">
                  +88096225566
                </a>
              </div>
            </li>
            <li className="grid grid-cols-[auto_1fr] gap-2 items-center">
              <Mail size={20} className="text-blue-400" />
              <a
                href="mailto:swiftcar@gmail.com"
                className="hover:text-blue-400"
              >
                swiftcar@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="text-blue-400 hover:text-white"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-white"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-blue-400 hover:text-white"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-400 hover:text-white"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm">
            Prices are subject to change without any prior notice.
          </p>
          <p className="text-sm">
            SwiftCar © 2024 All Rights Reserved. Designed by Md. Al Imran.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
