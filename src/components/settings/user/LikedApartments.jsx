import React from "react";
import ApartmentCard from "../../cards/ApartmentCard";

import { likedApartmentsData } from "../../../data";

const LikedApartments = () => {
  return (
    <div className="my-10">
      {likedApartmentsData.map((apartment, i) => (
        <ApartmentCard
          key={i}
          imageUrl={apartment.imageUrl}
          description={apartment.description}
          price={apartment.price}
          location={apartment.location}
        />
      ))}
    </div>
  );
};

export default LikedApartments;
