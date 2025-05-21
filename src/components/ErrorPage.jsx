import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage({ code = 404, description = "Page Not Found", image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <img
        src={image}
        alt={`Error ${code}`}
        className="w-80 h-auto mb-6"
      />
      <h1 className="text-6xl font-bold text-hijau mb-4">{code}</h1>
      <p className="text-gray-600 text-lg mb-6 text-center">{description}</p>
      <Link
        to="/"
        className="bg-hijau text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Back To Dashboard
      </Link>
    </div>
  );
}
