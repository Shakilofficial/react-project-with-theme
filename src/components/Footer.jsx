import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-dark text-primary-light py-6 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Footer Title</h3>
            <p className="text-sm">© 2024 My Project. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="list-none flex space-x-4">
              <li>
                <a href="#" className="hover:underline text-primary-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-primary-light">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-primary-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
