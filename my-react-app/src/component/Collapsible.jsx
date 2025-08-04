import { useState } from "react";
import PropTypes from "prop-types";
function Collapsible ({ title, content }) {
  
    const isArray = Array.isArray(content);
    const [open_collapsible,set_open_collapsible] = useState(false);


      // Toggles the open/closed state of a collapsible section by updating open_collapsible state
      const toggleSection = () => {
        set_open_collapsible(!open_collapsible);
        console.log("test" , open_collapsible);
    };


    return (
  <div className="w-full max-w-md mx-auto mb-4">
    <div
      className="flex items-center justify-between p-3 bg-[#FF6060] text-white rounded-md cursor-pointer"
      onClick={toggleSection}
    >
      <span className="font-medium">{title}</span>
      <i
        className={`fa-solid ${open_collapsible ? "fa-chevron-down" : "fa-chevron-up"}`}
      ></i>
    </div>
    {open_collapsible ? (
      <div className="p-3 bg-white text-black rounded-b-md">
        {isArray ? (
          <ul className="list-disc pl-5">
            {content.map((item, index) => (
              <li key={index} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-2">{content}</p>
        )}
      </div>
    ) : null}
  </div>
);

};


// props validation => object because we either have a string or an array 
Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

//  here use propstypes -> not movible use the reference u put ahead and watch back the class 
export default Collapsible ; 