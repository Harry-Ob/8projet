import { useState } from "react";
import PropTypes from "prop-types";
// import Chevron from '../assets/img/arrow-up.png' ;
// ../assets/img/arrow-right.svg 

// the first argument is an array 
// the 2nd is an array : with a string and an array 
// list_titles, list_content
function Collapsible ({ title, content }) {
    const isArray = Array.isArray(content);
    const [open_collapsible,set_open_collapsible] = useState(false);

    // const nb_collapsible = list_titles.length ; 
    // const  test = list_content[0] ; 
    // const list_equipments = list_content[1];

      // Toggles the open/closed state of a collapsible section by updating open_collapsible state
      const toggleSection = () => {
        set_open_collapsible(!open_collapsible);
    };


    return (

        <div className="w-full max-w-md mx-auto">
            <i className="fa-solid fa-house"></i>
            <div>{title}</div>
            <div className="" 
            onClick={() => toggleSection()}
            >{isArray? content.map(item=> <li key={item}> {item} </li> ): <p>{content}</p>}</div>
        </div>

    );


    // return (
    //     <div className="w-full max-w-md mx-auto">
    //     {list_titles.map((title, index) => (
    //         <div key={index} className="mb-2">
    //             <div
    //                 className="w-6 h-6 bg-red-500 cursor-pointer"
    //                 onClick={() => toggleSection(index)}
    //             ></div>
    //             <div className="p-3 bg-[#FF6060] text-white rounded-md mt-1">
    //                 <span>{title}</span>
    //             </div>
    //             {/* make ur grey darker because not visible */}
    //             {open_collapsible === index && (
    //                 <div className="p-3 bg-[#F6F6F673] text-black rounded-md mt-1">
    //                     {index === 0 && <p>{test}</p>}
    //                     {index ===1 && (
    //                         <ul>
    //                         {list_equipments.map((equipment, idx) => (
    //                             <li key={idx}>{equipment}</li>
    //                         ))}
    //                     </ul>
    //                     )}
    //                 </div>
    //             )}
    //         </div>
    //     ))}
    // </div>
        
    // );

};


// props validation => object because we either have a string or an array 
Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

//  here use propstypes -> not movible use the reference u put ahead and watch back the class 
export default Collapsible ; 