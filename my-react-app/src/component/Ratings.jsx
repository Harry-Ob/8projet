import PropTypes from "prop-types";
function Ratings(stars) {
  
  return (
    <div className="flex flex-row gap-2">
      {/* {console.log(stars.stars)} */}
      {/* Stars: {stars} */}
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            Number(index) < Number(stars.stars)
              ? "text-[#FF6060]"
              : "text-[#7A7A73]"
          }`}
        />
      ))}
    </div>
  );
}

export default Ratings;

Ratings.propTypes = {
  Ratings: PropTypes.numberIsRequired,
};
