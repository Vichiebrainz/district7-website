import { useDispatch, useSelector } from "react-redux";
import PostedApartmentsCard from "../../../components/cards/PostedApartmentsCard";
import { likedApartmentsData } from "../../../data";
import {
  getUserAddedProperties,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { useEffect } from "react";

export default function PostedApartments() {
  const dispatch = useDispatch();

  const { userAddedProperties } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getUserAddedProperties());
  }, []);

  console.log(userAddedProperties);

  return (
    <div className="px-8">
      {likedApartmentsData.map(
        ({ id, imageUrl, description, location, price }) => (
          <PostedApartmentsCard
            key={id}
            imageUrl={imageUrl}
            description={description}
            location={location}
            price={price}
          />
        )
      )}
    </div>
  );
}
