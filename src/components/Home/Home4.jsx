import React from 'react';
import missionImage from '../../assets/cycle1.png';  // Import the mission image

const MissionVision = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 md:px-12  sm:mb-[-200px] py-16">
      <div className="text-center mb-12">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 leading-tight">
          Our Mission & Vision
        </h2>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Mission Image on Left */}
        <div className="w-full lg:mt-20 md:w-1/2 p-6 flex justify-center mb-8 md:mb-0">
          <img
            src={missionImage}
            alt="Mission Image"
            className="w-full md:w-[500px] h-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 opacity-90 hover:opacity-100"
          />
        </div>

        {/* Mission Text on Right */}
        <div className="w-full md:w-1/2 p-6 text-left lg:-mt-40 opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">OUR MISSION</h3>
          <ul className="text-lg space-y-4">
            <li>🌱 To plant and grow as many trees to match at least 1 tree per person for the entire population.</li>
            <li>🌍 To protect and improve the environment as a valuable asset for the people living in urban & rural areas.</li>
            <li>💪 To protect our people and the environment from harmful effects of radiation and pollution.</li>
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Vision Image on Left */}
        <div className="w-full md:w-1/2 p-6 flex justify-center mb-8 md:mb-0">
         
        </div>

        {/* Vision Text on Right */}
        <div className="w-full md:w-1/2 lg:mt-[-400px]  sm:mt-[-100px] p-6 text-left opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">OUR VISION</h3>
          <p className="text-lg">
            🌿 To become a leader in tree planting services to build a green future for our future generation, provide them with a hospitable environment, and set them free to breathe in clean air by saving Mother Nature through planting more trees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
