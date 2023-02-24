import { useDispatch, useSelector } from "react-redux";
import PostedApartmentsCard from "../../../components/cards/PostedApartmentsCard";
import { likedApartmentsData } from "../../../data";
import {
  clearState,
  getUserAddedProperties,
  propertySelector,
  removeProperty,
} from "../../../store/slices/propertySlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function PostedApartments() {
  const dispatch = useDispatch();

  const {
    userAddedProperties,
    isRemoving,
    isRemoved,
    isRemoveError,
    errorMessage,
  } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getUserAddedProperties());
  }, []);

  useEffect(() => {
    if (isRemoveError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isRemoved) {
      toast.success("Property removed!");
      dispatch(getUserAddedProperties());
      dispatch(clearState());
    }
  }, [isRemoved, isRemoveError]);

  const handleRemoveApartment = (propertyId) => {
    dispatch(removeProperty(propertyId));
  };

  return (
    <div className="">
      {userAddedProperties?.length > 0 ? (
        userAddedProperties.map(
          ({ id, images, description, location, price }) => (
            <PostedApartmentsCard
              key={id}
              imageUrl={images}
              description={description}
              location={location}
              price={price}
              id={id}
              isRemoving={isRemoving}
              handleRemoveApartment={handleRemoveApartment}
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
