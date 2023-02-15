import { possibleConnections, likedApartmentsData } from "../../../data";
import ActiveOrdersCard from "../../../components/cards/ActiveOrdersCard";

export default function ActiveOrders() {
  return likedApartmentsData.map(
    ({ imageUrl, description, location, price }) => (
      <ActiveOrdersCard
        imageUrl={imageUrl}
        description={description}
        location={location}
        price={price}
        tenant={
          possibleConnections[
            Math.floor(Math.random() * possibleConnections.length - 1)
          ]?.name
        }
      />
    )
  );
}
