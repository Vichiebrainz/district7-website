import PostedApartmentsCard from "../../../components/cards/PostedApartmentsCard";
import { likedApartmentsData } from "../../../data";

export default function PostedApartments() {
  return likedApartmentsData.map(
    ({ id, imageUrl, description, location, price }) => (
      <PostedApartmentsCard
        key={id}
        imageUrl={imageUrl}
        description={description}
        location={location}
        price={price}
      />
    )
  );
}
