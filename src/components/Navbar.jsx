import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full bg-primary-light dark:bg-primary-dark shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-primary-contrast">
          <h1>Navbar</h1>
        </Link>

        {/* Toggle button */}
        <button
          onClick={handleClick}
          className="md:hidden text-primary-contrast hover:text-primary-dark transition duration-300"
        >
          {open ? <LiaTimesSolid className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navigation Links */}
        <div className={`${open ? 'flex' : 'hidden'} md:flex md:items-center md:w-auto w-full flex-col md:flex-row transition-all duration-500 ease-in-out`}>
          <ul className="list-none flex flex-col md:flex-row md:items-center gap-y-2 md:gap-y-0 md:gap-x-6 text-primary-contrast font-medium">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={handleClose}
                  className="hover:text-primary-dark transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 md:mt-0 md:ml-6 flex items-center space-x-4">
            <button className="bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-contrast transition duration-300">
              Get Started
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
