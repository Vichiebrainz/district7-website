import Navbar from "../../components/landingPages/navbar/nav2";

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="p-10 pt-32 space-y-4 xl:w-[1024px] mx-auto">
        <h2 className="text-3xl font-bold mb-3">Services</h2>
        <p>Welcome to District 7, your ultimate destination for finding your dream apartment and making the rental process as smooth as possible.</p>
        <p>We offer a wide range of services to ensure that your apartment search is a success. Our team of experts is committed to providing personalized service and working with you every step of the way to make sure that you find the perfect apartment.</p>
        <p>Our services include:</p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 list-decimal">
          <li className="border rounded-md p-4">Apartment Search: Our innovative platform allows you to search for apartments in any area of your choice. With our user-friendly interface, you can easily browse through a wide selection of properties, view pictures, compare prices and amenities, and find the perfect apartment that meets your needs.</li>
          <li className="border rounded-md p-4">Rental Assistance: We understand that the rental process can be overwhelming, especially if you're new to an area. That's why we offer rental assistance to guide you through every step of the process, from finding the right apartment to signing the lease.</li>
          <li className="border rounded-md p-4">Connect: Our product adopts a tinder-like system to connect, recommend and match=make potential roommates. We understand that looking for the right roommate can be a hassle, that's why we have built a solution to help you find the roommate made for you, with ease.</li>
          <li className="border rounded-md p-4">Split: The split feature allows you to rent a room in an apartment, instead of renting the whole apartment. We understand that apartments in places like Lagos and Abuja are extremely expensive. Our solution will ensure everyone can afford a roof over his head in these places.</li>
          <li className="border rounded-md p-4">Property Management: Our property management services are designed to help property owners and landlords manage their properties more efficiently. We offer a range of services, including rent collection, maintenance and repairs, and tenant screening.</li>
          <li className="border rounded-md p-4">Flexible Rental Options: We offer a range of rental options to suit your individual needs. Whether you're looking for a short-term rental or a long-term lease, we have you covered.</li>
          <li className="border rounded-md p-4">Customer Support: Our team is always on hand to answer any questions you may have and provide you with the support you need to make informed decisions about your apartment search.</li>
        </ol>
        <p>
          At District 7, we are committed to providing our customers with the best possible service. Our services are designed to make apartment hunting stress-free and enjoyable. Sign up today to learn more about how we can help you find your dream apartment.
        </p>
      </div>
    </div>
  )
}