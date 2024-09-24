const HomepegeFooter = () => {
  return (
    <div className=" py-8 mx-auto font-semibold grid grid-cols-1 md:grid-cols-3 gap-8 px-4 bg-gradient-to-tl from-accent to-primary divide-y md:divide-y-0 md:divide-x">
      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-semibold my-4">Contact</h3>
        <p>
          16516 /
          <a href="tel:+8809XXXXX03" className="hover:underline">
            8809XXXXX03
          </a>
        </p>
        <p>
          <a href="mailto:info@swiftcar.xyz" className="hover:underline">
            info@swiftcar.xyz
          </a>
        </p>
        <h3 className="text-lg font-semibold mt-6">Corporate Address</h3>
        <p>House 454, Road No: 31,</p>
        <p>Mohakhali DOHS, Dhaka</p>
        <h3 className="text-lg font-semibold mt-6">Trade License No</h3>
        <p>TRAD/DNCC/145647/2022</p>
      </div>

      {/* Other Pages Section */}
      <div>
        <h3 className="text-lg font-semibold my-4">Other Pages</h3>
        <ul>
          <li>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/refund-policy" className="hover:underline">
              Refund & Return Policy
            </a>
          </li>
          <li>
            <a href="/sitemap" className="hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div>
        <h3 className="text-lg font-semibold my-4">Company</h3>
        <ul>
          <li>
            <a href="/smanager" className="hover:underline">
              Manager
            </a>
          </li>
          <li>
            <a href="/sbusiness" className="hover:underline">
              Business
            </a>
          </li>
          <li>
            <a href="/sdelivery" className="hover:underline">
              Delivery
            </a>
          </li>
          <li>
            <a href="/sbondhu" className="hover:underline">
              Bondhu
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomepegeFooter;
