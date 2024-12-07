import React from "react";
import backgroundImage from '../../assets/footer.png'; // Import your background image
import logo from '../../assets/logo.png'; // Import your logo image

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '1800px 1500px', // Ensures the image covers the entire footer
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional: Adds parallax effect for better background scrolling
        color: 'white', // Text color for better visibility on dark backgrounds
        padding: '20px 0', // Adds padding to the footer for spacing
      }}
    >
      <div className=" bg-opacity-70 py-4 text-black">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <img src={logo} alt="Vasundhara Logo" className="w-20 -mt-10"  />
              </a>
              <p className="text-justify">
                Vasundhara is committed to conserving nature through reforestation, plant preservation,
                and sustainable initiatives. Join us in creating a greener, healthier planet for future generations.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                About Us
              </h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">Our Mission</a></li>
                <li><a href="#" className="hover:text-blue-400">Our Vision</a></li>
                <li><a href="#" className="hover:text-blue-400">Team</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Connect With Us
              </h2>
              <div className="mt-4">
                <ul>
                  <li>Phone: +91 9766539071</li>
                  <li>Email: <a href="mailto:support@vasuundhara.com">support@vasuundhara.com</a></li>
                  <li>Address: Vasundhara Paryavaran Sanvardhan Sanstha - Gat No- 115/4, Dhamane Gaonvathan, Tal- Maval, Dist- Pune – 410506</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-gray-400">
        <p>
          &copy; {currentYear} Vasundhara. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
