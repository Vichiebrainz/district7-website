import React from "react";

function ApartmentCard({ imageUrl, description }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-1/4 h-auto object-cover"
        src={imageUrl}
        alt="Apartment"
      />
      <div className="px-4 py-4">
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;
