import React, { useState } from 'react';

const LocationSearchPanel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const addresses = [
    "24B, Near Kapoor's Cafe, Sheryians Coding School, Bhopal",
    "45A, Opposite City Mall, Main Street, Indore",
    "15C, Beside Lake View Park, Char Imli, Bhopal",
    "90D, Near Central Library, University Road, Gwalior"
  ];

  return (
    <div className="space-y-4">
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`p-4 bg-white rounded-lg shadow-md cursor-pointer ${
            selectedIndex === index ? 'border-2 border-black' : ''
          }`}
          onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
        >
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full text-gray-600 text-lg">
              <i className="ri-map-pin-fill"></i>
            </div>
            {/* Address */}
            <div className="text-gray-800">
              <h4 className="text-sm font-medium">{address}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
