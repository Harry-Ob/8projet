import PropTypes from "prop-types";
import { useState } from "react";


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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white  "
      >
        {/* left arrow  */}
      
        <i className="fa-solid fa-sharp fa-chevron-down rotate-90 text-[1.5rem] md:text-[3rem]"></i>
       
      </button>
      
      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white  "
      >
        {/* right arrow */}
        <i className="fa-solid fa-sharp fa-chevron-up rotate-90 text-[1.5rem] md:text-[3rem]"></i>
       
      </button>
      
      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-3 py-1">
        {currentImage + 1}/{len_pic}
      </div>
    </div>
    ); 
}

Slider.propTypes = {
  list_img: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Slider ; 