import PropTypes from "prop-types";
import { useState } from "react";
// import arrowLeft from '../assets/img/arrow-left.svg';
// import arrowRight from '../assets/img/arrow-right.svg';


function Slider ({list_img}) {
  // To manage slider index
  const [currentImage, setCurrentImage] = useState(0);
  const len_pic = list_img.length ;

  const nextImage = () => {
    setCurrentImage((next) => (next + 1) %len_pic );
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + len_pic) % len_pic);
  };

  return (
    //  what have u done when there is just one picture and not more ? u need to manage that u have some test 
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Image Display */}
      <img
        src={list_img[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="w-full h-96 object-cover rounded-lg"
      />
      
      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        {/* left arrow  */}
        {/* <img src={arrowLeft} alt="Previous" className=""/> */}
        <i className="fa-solid fa-arrow-left"></i>
        {/* ❮ */}
      </button>
      
      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        {/* right arrow */}
        <i className="fa-solid fa-arrow-right"></i>
        {/* <img src={arrowRight} alt="next" className=""/> */}
        {/* ❯ */}
      </button>
      
      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full">
        {currentImage + 1}/{len_pic}
      </div>
    </div>
    ); 
}

Slider.propTypes = {
  list_img: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Slider ; 