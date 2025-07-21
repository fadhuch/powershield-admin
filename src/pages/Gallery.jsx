import React from 'react';
import './Gallery.css';

function Gallery() {
  // Sample gallery items - you can replace these with your actual images
  const galleryItems = [
    {
      id: 1,
      title: "Security Systems",
      description: "Advanced security monitoring and alarm systems",
      image: "https://via.placeholder.com/300x300/4A90E2/ffffff?text=Security+Systems"
    },
    {
      id: 2,
      title: "Access Control",
      description: "Professional access control and entry management",
      image: "https://via.placeholder.com/300x300/7ED321/ffffff?text=Access+Control"
    },
    {
      id: 3,
      title: "Surveillance",
      description: "24/7 surveillance and monitoring solutions",
      image: "https://via.placeholder.com/300x300/F5A623/ffffff?text=Surveillance"
    },
    {
      id: 4,
      title: "Personal Protection",
      description: "Executive and personal protection services",
      image: "https://via.placeholder.com/300x300/D0021B/ffffff?text=Personal+Protection"
    },
    {
      id: 5,
      title: "Cyber Security",
      description: "Digital security and cyber protection services",
      image: "https://via.placeholder.com/300x300/9013FE/ffffff?text=Cyber+Security"
    },
    {
      id: 6,
      title: "Consultation",
      description: "Security assessment and consultation services",
      image: "https://via.placeholder.com/300x300/50E3C2/ffffff?text=Consultation"
    }
  ];

  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Our Services Gallery</h1>
        <p>Explore our range of security and protection services through our gallery.</p>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
