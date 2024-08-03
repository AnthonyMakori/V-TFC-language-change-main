/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/services">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                </Link>
                <Link href="/company">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Company</a>
                </Link>
                <Link href="/contact">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
                </Link>
                <Link href="/download">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Apps Download</a>
                </Link>
                <Link href="/login">
                <a href="/login"></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/login">
                <a className="text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-700">
                  LOGIN
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
