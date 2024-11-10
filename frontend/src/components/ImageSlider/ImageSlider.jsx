import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pic1 from '../Assets/pune_places_1.jpeg'
import pic2 from '../Assets/pune_places_2.jpg'
import pic3 from '../Assets/pune_places_3.jpeg'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your own images array
  const images = [
    { uri:pic1, alt: 'Slide 1' },
    { uri:pic2, alt: 'Slide 2' },
    { uri:pic3, alt: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-20 ">
      <div className="relative h-96 w-full overflow-hidden rounded-lg ">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.uri}
              alt={image.alt}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
