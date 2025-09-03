
"use client";
import React, { useState } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Example state variable to demonstrate stability
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* Demo state variable */}
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <span className="font-semibold">Demo Counter:</span> {counter}
          <button
            className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCounter((c) => c + 1)}
          >
            Increment
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
