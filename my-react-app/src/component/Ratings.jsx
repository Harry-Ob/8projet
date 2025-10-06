import PropTypes from "prop-types";
function Ratings( stars ){
    
// Le code avec les etoiles fonctionne c'est la ternary pour changer les couleurs dans le code que tu as qui est un soucis.
// work in black or grey then change it


    return (
        <div className="flex flex-row gap-2">
          {console.log(stars.stars)}
  {/* Stars: {stars} */}
  {[...Array(5)].map((_, index) => (
    <i key={index} 
    className={`fa-solid fa-star ${
          Number(index) < Number(stars.stars) ? 'text-[#FF6060]' : 'text-[#7A7A73]'
        }`}
      />
    // #FF6060
    
   
  ))}
</div>
        
    )
}




export default Ratings; 

Ratings.propTypes = {
    Ratings: PropTypes.numberIsRequired
};