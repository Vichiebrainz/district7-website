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
    <div className="">
      {userAddedProperties?.length > 0 ? (
        userAddedProperties.map(
          ({ id, images, description, location, price }) => (
            <PostedApartmentsCard
              key={id}
              imageUrl={images[0].media}
              description={description}
              location={location}
              price={price}
            />
          )
        )
      ) : (
        <div className="w-full h-[55vh] flex justify-center items-center text-[15px] md:text-[21px] font-semibold font-header text-[#068903]">
          You have not posted any apartment yet!
        </div>
      )}
    </div>
  );
}
