import React, { useEffect } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleProperty,
  propertySelector,
} from "../../../../store/slices/propertySlice";
import _ from "lodash";

const ViewApartmentDetails = () => {
  const dispatch = useDispatch();
  let { propId } = useParams();

  const { singleProperty, isFetching, isSuccess, isError, errorMessage } =
    useSelector(propertySelector);

  useEffect(() => {
    dispatch(getSingleProperty(propId));
  }, []);

  console.log(singleProperty);

  const returnVideo = () => {
    if (singleProperty) {
      return _.find(singleProperty.images, { media_type: "video" }).media;
    }
  };

  const returnImages = () => {
    if (singleProperty) {
      return _.filter(singleProperty.images, { media_type: "image" });
    }
  };

  console.log(returnImages());

  return (
    <div>
      <div className="w-full flex items-center mb-6">
        <div className="flex items-center gap-2">
          <HiArrowLongLeft />
          <div className="text-gray-500 font-header text-[14px]">
            Back to Explore
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-6">
        <div className="basis-2/3">
          <div className="video-player w-full h-auto rounded-[18px] md:rounded-[30px] mb-8">
            <ReactPlayer
              url={returnVideo()}
              controls
              loop
              playing
              width={"100%"}
              height={"100%"}
              className="rounded-[30px] [&>*]:rounded-[20px]"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-3">
            {returnImages().map((image, i) => (
              <img
                src={image.media}
                className="w-full h-[150px] rounded-md object-cover"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApartmentDetails;
