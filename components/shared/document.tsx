"use client"
import React, { useState } from "react";

export function Document() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  const pages = [
    {
      title: "Introduction",
      content: (
        <>
          <h1 className="text-4xl font-bold mb-6">Introduction</h1>
          {/* Content for Introduction page */}
        </>
      ),
    },
    {
      title: "Quick Start",
      content: (
        <>
          <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
          {/* Content for Quick Start page */}
        </>
      ),
    },
    // Add more pages similarly
  ];

  const totalPages = Math.ceil(pages.length / itemsPerPage);

  const renderNavbar = () => (
    <nav className="space-y-2">
      {pages.map((page, index) => (
        <a
          key={index}
          className={`block text-blue-200 ${
            currentPage === Math.ceil((index + 1) / itemsPerPage) ? "font-bold" : ""
          }`}
          href="#"
          onClick={() => setCurrentPage(Math.ceil((index + 1) / itemsPerPage))}
        >
          {page.title}
        </a>
      ))}
    </nav>
  );

  const renderContent = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <main className="flex-1 p-8">
        {pages.slice(startIndex, endIndex).map((page, index) => (
          <div key={index}>
            {page.content}
            {/* Additional content */}
          </div>
        ))}
      </main>
    );
  };

  return (
    <div className="flex h-screen">
    <aside className="w-64 bg-gray-800 text-white p-5">{renderNavbar()}</aside>
    {renderContent()}
  </div>
);
}