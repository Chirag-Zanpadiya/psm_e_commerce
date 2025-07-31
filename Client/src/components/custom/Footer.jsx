import React from "react";
import { Button } from "../ui/button";
import { FacebookIcon, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 dark:bg-zinc-900 py-8 sm:py-12 mt-10">
      <div className="container mx-auto px-4">
       <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
  {/* Features */}
  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
    <h5 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Features</h5>
    <ul className="space-y-2">
      {["Latest Offers", "Secure Checkout", "Wishlist", "Easy Returns", "Gift Cards", "Bulk Orders"].map((text, i) => (
        <li key={i}>
          <a
            href="#"
            className="tilt-3d inline-block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Resources */}
  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
    <h5 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Resources</h5>
    <ul className="space-y-2">
      {["FAQs", "Order Tracking", "Size Guide", "Delivery Info"].map((text, i) => (
        <li key={i}>
          <a
            href="#"
            className="tilt-3d inline-block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* About */}
  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
    <h5 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">About</h5>
    <ul className="space-y-2">
      {["Our Story", "Careers", "Press", "Blog"].map((text, i) => (
        <li key={i}>
          <a
            href="#"
            className="tilt-3d inline-block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Help */}
  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
    <h5 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Help</h5>
    <ul className="space-y-2">
      {["Support", "Help Center", "Contact Us", "Return Policy"].map((text, i) => (
        <li key={i}>
          <a
            href="#"
            className="tilt-3d inline-block text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Stay Connected + Newsletter */}
  <div className="px-4 mt-10 sm:w-full xl:w-1/4 xl:mt-0 xl:ml-auto">
    <h5 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">
      Stay Connected
    </h5>
    <div className="flex items-center gap-3 mb-5">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="tilt-3d w-9 h-9 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-600 hover:text-white transition"
      >
        <FacebookIcon size={18} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="tilt-3d w-9 h-9 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white transition"
      >
        <Twitter size={18} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="tilt-3d w-9 h-9 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white transition"
      >
        <Youtube size={18} />
      </a>
    </div>

    {/* Newsletter */}
    <div className="flex flex-col gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="tilt-3d px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Subscribe
      </button>
    </div>
  </div>
</div>


        {/* Bottom section */}
        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t dark:border-gray-700">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong className="dark:text-white text-lg">ZCATechX</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2 dark:text-white">Address</h6>
            <address className="not-italic mb-4 text-sm dark:text-gray-300">
              ShopNest Pvt. Ltd. <br />
              123 E-commerce Street <br />
              Ahmedabad, Gujarat 380015 <br />
              India
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2 dark:text-white">Free Resources</h6>
            <p className="mb-4 text-sm dark:text-gray-300">
              Download UI blocks, templates, and icons for <strong>FREE</strong>
              .<br />
              <em>MIT Licensed</em> — no attribution required.
            </p>
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <Button className="px-4 py-2 dark:bg-gray-700 dark:text-white">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
