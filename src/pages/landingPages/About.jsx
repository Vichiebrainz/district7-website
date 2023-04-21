import React from "react";
import Navbar from "../../components/landingPages/navbar/nav2";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="h-[250px] md:h-[350px] w-full mb-4 md:md-12 text-white font-bold font-header text-center text-[18px] md:text-[24px] background-image">
        <img
          className="bg-img w-full h-full object-cover"
          src="/background-image.png"></img>

        <div className="content py-12 lg:py-24 px-20 flex flex-col justify-between h-full">
          <p className="font-header w-full text-[50px] leading-[61px] text-white">
            ABOUT US
          </p>
        </div>
      </div> */}
      <div className="p-8 md:p-16 pt-20 md:pt-16">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-16 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 font-header">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 font-header mb-4">
                <span className="font-bold text-[18px] text-primary-green">
                  Welcome to District 7
                </span>
                , your premier destination for finding your dream apartment and
                making the rental process as seamless as possible.
              </p>
              <p className="font-normal text-[15px] leading-6 text-gray-600 font-header ">
                We understand that searching for the perfect apartment can be a
                daunting task, especially if you're new to an area or have a
                busy schedule. That's why our team of experts has developed an
                innovative platform that makes apartment hunting stress-free and
                enjoyable for our customers.
              </p>
              <p className="font-normal text-[15px] leading-6 text-gray-600 font-header ">
                Our user-friendly interface allows you to easily browse through
                a wide selection of properties, view pictures, compare prices
                and amenities, and find the perfect apartment that meets your
                needs. Whether you're looking for a cozy studio in the heart of
                the city or a spacious family home in the suburbs, we have you
                covered.
              </p>
            </div>
            <div className="w-full lg:w-8/12 rounded-[12px]">
              {/* <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              /> */}
              <img
                src="/background-image.png"
                alt=""
                className="w-full h-[500px] relative rounded-[12px] object-cover
                "
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12 font-header">
            <div className="w-full lg:w-8/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Our Story
              </h1>
              <p className="font-normal text-[15px] leading-6 text-gray-600 mb-4">
                At District 7, we believe in providing personalized service to
                our customers. We take the time to understand your specific
                requirements and work with you every step of the way to ensure
                that your apartment search is a success. We offer flexible
                rental options that cater to your lifestyle, and our team is
                always on hand to answer any questions you may have.
              </p>
              <p className="font-normal text-[15px] leading-6 text-gray-600 mb-4">
                We are committed to transparency and fairness in the rental
                process. That's why we make sure that our properties are priced
                fairly and that you have access to all the information you need
                to make an informed decision.
              </p>
              <p className="font-normal text-[15px] leading-6 text-gray-600 mb-4">
                Thank you for considering District 7 as your trusted partner in
                apartment hunting. Our mission is to provide you with a
                hassle-free rental experience and help you find your dream
                apartment. Sign up today to get started!
              </p>
            </div>
            {/* <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                    alt="Alexa featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                    alt="Alexa featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Alexa
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                    alt="Olivia featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                    alt="Olivia featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Olivia
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                    alt="Liam featued Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                    alt="Liam featued Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Liam
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                    alt="Elijah featured img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                    alt="Elijah featured img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Elijah
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
