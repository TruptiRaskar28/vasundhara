
import React, { useState, useEffect } from "react";

// Import images
import n1Image from "../../assets/e1.jpeg";
import n2Image from "../../assets/e2.jpeg";
import n3Image from "../../assets/e3.jpeg";

const ProductGrid = () => {
  // State to control the modal visibility and the selected image
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  // Load the Facebook SDK
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="py-4 px-2 mx-auto bg-[#F6F6F6] max-w-screen-4xl h-[700px] sm:py-4 sm:mt-[-1050px] lg:mt-[-100px] lg:px-6 p-6 -mt-20">
      {/* Recent Events Heading */}
      <div className="text-center py-6 text-blue-800">
        <h2 className="text-3xl font-bold animate-fadeInUp">Recent Events</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-6 w-full">
        {/* Wine Section */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-gray-50 h-[350px] sm:h-[400px] lg:h-[450px] w-full flex items-center justify-center">
          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg w-full h-full border-2 border-black"
            onClick={() => openModal(n1Image)}
          >
            <img
              src={n1Image}
              alt="Wines"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
            />
          </a>
        </div>

        {/* Gin Section */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-stone-50 h-[350px] sm:h-[800px] sm:w-[900px] lg:h-[450px] lg:w-[650px] sm:w-[900px] w-full flex flex-col gap-4">
          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg w-full h-1/2 sm:h-[400px] lg:h-[500px] border-2 border-black"
            onClick={() => openModal(n2Image)}
          >
            <img
              src={n2Image}
              alt="Gin"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
            />
          </a>

          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg w-full h-1/2 sm:h-[400px] lg:h-[500px] border-2 border-black"
            onClick={() => openModal(n3Image)}
          >
            <img
              src={n3Image}
              alt="Whiskey"
              className="absolute inset-0 w-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
            />
          </a>
        </div>

        {/* Facebook Live Section */}
        <div className="col-span-1 lg:-ml-2 sm:ml-40 lg:w-[500px] sm:col-span-1 lg:col-span-1 h-auto flex items-center justify-center">
          <div
            className="fb-page w-full max-w-[800px] h-[500px]"
            data-href="https://www.facebook.com/facebook"
            data-tabs="timeline"
            data-width="800"
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </div>

      {/* See More Button */}
      <div className="text-center sm:mt-[-20px]  mt-8">
        <a
          href="/recent-events"
          className="px-6 lg:mt-[-200px] py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default ProductGrid;
