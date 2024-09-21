import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you. Whether you have a question or need
            support, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">
              Get in Touch
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <MapPin size={24} className="text-blue-500" />
                <span>
                  Kusholi Bhaban, 4th Floor, 238/1 Begum Rokeya Sharani,
                  Agargaon, Dhaka-1207
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={24} className="text-blue-500" />
                <a href="tel:+8809638442121" className="hover:text-blue-400">
                  +8809638442121
                </a>
                ,
                <a href="tel:+8809604442121" className="hover:text-blue-400">
                  +8809604442121
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={24} className="text-blue-500" />
                <a
                  href="mailto:support@example.com"
                  className="hover:text-blue-400"
                >
                  support@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">
              Send Us a Message
            </h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-6 text-center">
            Find Us Here
          </h2>
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.074863441372!2d90.40828451498156!3d23.812250394564615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79959a2b825%3A0x3d1c1b8a7a9d0ae7!2sKusholi%20Bhaban!5e0!3m2!1sen!2sbd!4v1654786493548!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
