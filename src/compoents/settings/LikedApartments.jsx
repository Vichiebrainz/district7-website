import React from "react";
import ApartmentCard from "../Apartment";

const LikedApartments = () => {
  return (
    <div>
      <ApartmentCard
        name="Apartment Name"
        bedrooms="2"
        bathrooms="2"
        sqft="1,000"
        location="City, Country"
        image="image.jpg"
        price="500,000"
      />
    </div>
  );
};

export default LikedApartments;
