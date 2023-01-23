import { possibleConnections, likedApartmentsData } from "../../../data";
import ConcludedOrdersCard from "../../../components/cards/ConcludedOrdersCard";

export default function ConcludedOrders() {
  return likedApartmentsData.map(
    ({ imageUrl, description, location, price }) => (
      <ConcludedOrdersCard
        imageUrl={imageUrl}
        description={description}
        location={location}
        price={price}
        tenant={
          possibleConnections[
            Math.floor(Math.random() * possibleConnections.length - 1)
          ].name
        }
      />
    )
  );
}
