import React from "react";

const ApartmentCard = (props) => {
  const { name, bedrooms, bathrooms, sqft, location, image, price } = props;

  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      <div className="relative flex">
        <img src={image} alt={name} className="w-1/4 h-full object-cover" />
        <div className="px-6 py-5">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-3">
            {bedrooms} Bedrooms, {bathrooms} Bathrooms
          </p>
          <p className="text-gray-600 mb-3">{sqft} sq ft</p>
          <p className="text-gray-600 mb-3">Located in {location}</p>
          <p className="text-lg font-bold text-gray-800 mb-3">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
