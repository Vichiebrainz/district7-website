import React from "react";
import ApartmentCard from "../cards/ApartmentCard";
import houseA from "../../assets/house1.jpg";
import houseB from "../../assets/house2.jpg";
import { likedApartmentsData } from "../../data";

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
