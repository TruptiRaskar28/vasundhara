import React from 'react';

const organizations = [
  { name: 'Give2Asia', imageUrl: '/path-to-your-image/give2asia.png', link: 'https://www.give2asia.org' },
  { name: 'Global Giving', imageUrl: '/path-to-your-image/global-giving.png', link: 'https://www.globalgiving.org' },
  { name: 'Silicon Valley Community Foundation', imageUrl: '/path-to-your-image/sv-community-foundation.png', link: 'https://www.siliconvalleycf.org' },
  // Add more organizations as needed
];

// Dummy collaboration data
const collaborations = [
  { companyName: 'Tech Innovations Inc.', details: 'Leading global tech company specializing in AI and cloud solutions.' },
  { companyName: 'EcoWorld Ltd.', details: 'Committed to sustainable energy solutions and environmental protection.' },
  { companyName: 'HealthCare Plus', details: 'Global health services provider, improving access to medical care worldwide.' },
  // Add more collaborations as needed
];

const GlobalOrganizations = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Global Organizations</h2>

      {/* Global Organizations Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {organizations.map((org, index) => (
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <a href={org.link} target="_blank" rel="noopener noreferrer" className="text-center">
              <img src={org.imageUrl} alt={org.name} className="w-24 h-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">{org.name}</h3>
            </a>
          </div>
        ))}
      </div>

      {/* Collaborations Section */}
      <h2 className="text-3xl font-bold text-center my-6">Our Collaborations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        {collaborations.map((collab, index) => (
          <div
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{collab.companyName}</h3>
            <p className="text-gray-600">{collab.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalOrganizations;
