import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Top Section: Description & Icons in Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:8 text-center md:text-left">
          {/* Description */}
          <div className="max-w-md">
            <p>
              Create a modern and minimalist blog with Katen —{" "}
              <strong> a clean, fast, and powerful template for writers.</strong>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            className="w-28 h-28 rounded-full mt-3"
            alt="Avatar"
          />
          <p className="mt-2 text-gray-500">Partner: John Doe</p>
        </div>

        {/* Footer Copyright */}
        <div className="flex text-center text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Katen Template | All rights reserved.
        </div>
      </div>
    </footer>
  );
}