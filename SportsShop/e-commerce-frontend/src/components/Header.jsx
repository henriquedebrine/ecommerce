import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white hover:text-blue-600 transition-colors duration-300">
            SportsShop
          </h1>
        </div>
        <nav className="space-x-6 hidden md:flex md:items-center">
          <Link 
            to="/" 
            className="hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Produtos
          </Link>
          <Link 
            to="/cart" 
            className="hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Carrinho
          </Link>
          <Link 
            to="/login" 
            className="hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Cadastrar
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
