import React from "react";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-sans">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-3xl font-bold cursor-pointer">Syllinse</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#menu" className="hover:text-yellow-400 transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#scripts" className="hover:text-yellow-400 transition">
              Scripts
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-yellow-400 transition">
              FAQ
            </a>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-yellow-400 transition font-semibold"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <header className="text-center mt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-400">Syllinse</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          The ultimate platform to manage your scripts, automate workflows, and
          collaborate with your team seamlessly.
        </p>
        <Link
