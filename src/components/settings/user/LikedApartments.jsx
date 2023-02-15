import React, { useEffect } from "react";
import ApartmentCard from "../../cards/ApartmentCard";

import { likedApartmentsData } from "../../../data";
import {
  getUserLikedProperties,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LikedApartments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userLikedProperties } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getUserLikedProperties());
  }, []);

  return (
    <div className="my-10">
      {userLikedProperties?.length > 0 &&
        userLikedProperties?.map((apartment, i) => (
          <ApartmentCard
            key={i}
            imageUrl={apartment.imageUrl}
            description={apartment.description}
            price={apartment.price}
            location={apartment.location}
          />
        ))}

      {userLikedProperties?.length <= 0 && (
        <div className="w-full h-[55vh] flex justify-center items-center text-[15px] md:text-[21px] font-semibold font-header text-[#068903]">
          You do not have any liked apartments yet!
        </div>
      )}
    </div>
  );
};

export default LikedApartments;
