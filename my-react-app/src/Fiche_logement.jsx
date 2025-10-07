import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapsible from "./component/Collapsible";
import Slider from "./component/Slider";
import Ratings from "./component/Ratings";

function Fiche_logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //  pk je dois lui passer le navigate ? because the contexte needs it when given as an argument nut why ?
  useEffect(() => {
    const fetchLogement = async () => {
      const response = await fetch("/logements.json");
      if (!response.ok) throw new Error("Échec du chargement des données");

      const data = await response.json();
      const foundLogement = data.find((lg) => lg.id === id);

      if (!foundLogement) {
        navigate("/404");
      }

      setLogement(foundLogement);
      setLoading(false);
    };

    fetchLogement();
  }, [id, navigate]);

  if (loading) return <p>Chargement...</p>;
  return (
    <div className="relative w-full  mx-auto">
      {/* Slider */}
      <div>
        <Slider list_img={logement.pictures} />
      </div>

      <div
        className="flex justify-between flex-wrap 
      md:flex-nowrap "
      >
        <div className="flex flex-col items-start justify-content gap-3 mt-5 mb-5 w-full lg:w-auto">
          {/* Title and Location */}
          <h1 className=" text-2xl text-[#FF6060]">{logement.title}</h1>
          <p className="text-black">{logement.location}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 my-4">
            {logement.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#FF6060] text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className=" mt-5 mb-5 flex flex-row-reverse w-full justify-content gap-5
        md:flex md:flex-col md:items-center md:w-auto "
        >
          <div
            className="flex flex-row-reverse justify-between items-center w-full 
          md:flex-col
          md:items-center gap-5"
          >
            {/* ratings  */}
            <div className="flex items-center order-1 md:order-2 ">
              <Ratings stars={logement.rating} />
            </div>

            {/* image - name host  */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <p className="text-left text-sm ">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-3 mb-4">
        <Collapsible title="Description" content={logement.description} />
        <Collapsible title="Equipement" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Fiche_logement;
