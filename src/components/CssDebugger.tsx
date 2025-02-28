import React from 'react';

const CssDebugger = () => {
  return (
    <div className="p-4 m-4 border-2 border-red-500 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">CSS Debugging Component</h2>
      <p className="text-gray-700 mt-2">
        This component helps check if Tailwind CSS is working properly.
        If you see a blue background, red border, and the text styling applied, CSS is working!
      </p>
      <div className="mt-4 p-3 bg-green-100 text-green-700 rounded font-medium">
        Green box with styling
      </div>
      <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded font-medium">
        Yellow box with styling
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 1
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default CssDebugger; 