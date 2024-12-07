import React from 'react';
import treeBackgroundImage from '../../assets/treepl2.png'; // Import a background image of trees or nature
import treeVideo from '../../assets/tree-plantation-video.mp4'; // Import the video file

const TreePlantationPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Explicit Width and Height */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-[800px] sm:h-[600px] md:h-[800px] lg:h-[800px]"
        style={{
          backgroundImage: `url(${treeBackgroundImage})`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 text-black pt-20 sm:pt-24 space-y-6">
        <h1 className="text-4xl sm:text-3xl font-bold text-center mb-6 sm:mb-4">
          What Is Tree Plantation?
        </h1>

        {/* Quote Section */}
        <div className="text-xl sm:text-lg italic text-center mb-6">
          <p>
            “Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth.”
          </p>
          <span className="block mt-4 text-right font-semibold">– Herman Hesse</span>
        </div>

        {/* Content Section */}
        <div className="text-lg sm:text-base md:text-lg">
          <p className="mb-4">
            If you want to know the reasons for why trees are important, why we need trees, the importance of tree plantation, and why we should plant trees, here we share a brief on the same.
            Trees offer a plethora of benefits. Besides being your conversational buddy, trees help combat climate change and provide various ecological and health benefits. Here's why planting trees is essential:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>Help combat climate change</li>
            <li>Purify the air</li>
            <li>Provide us with precious oxygen</li>
            <li>Keep the streets and the city cool</li>
            <li>Conserve energy and water</li>
            <li>Prevent water pollution and soil erosion</li>
            <li>Provide food</li>
            <li>Heal as exposure to trees helps alleviate mental and physical fatigue</li>
            <li>Create livelihood opportunities</li>
            <li>Provide shade and habitat for animals/birds/wildlife</li>
            <li>Beautify space</li>
            <li>Provide wood</li>
            <li>Enhance the value of property</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center mb-4 mt-8 sm:mt-6 md:mt-8">
          <video
            width="90%" // Adjust the video width for responsiveness
            controls
            className="rounded-lg shadow-lg mb-6"
          >
            <source
              src={treeVideo} // Use the imported video source
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default TreePlantationPage;
