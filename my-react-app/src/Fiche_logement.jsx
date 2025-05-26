import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapsible from "./component/Collapsible";
import Slider from "./component/Slider";

function Fiche_logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //  pk je dois lui passer le navigate ? because the contexte needs it when given as an argument nut why ?
  useEffect(() => {
    const fetchLogement = async () => {
      // try {
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
    <div className="p-4">
      {/* Slider */}

      <div>
        <Slider list_img={logement.pictures} />
      </div>

      <div className="flex flex-column">
        {/* Title and Location */}
        <h1 className="text-2xl text-[#FF6060]">{logement.title}</h1>
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

        {/* Host and Rating */}
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center gap-2">
            <p className="text-right text-sm">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Rating stars */}
          <div className="flex gap-1">{/* my stars goes there */}</div>

          <Collapsible title="Description" content={logement.description} />
          <Collapsible title="Equipement" content={logement.equipments} />

          {/* content and titles  */}

          <div>{/* here u will add the tags  */}</div>
        </div>

        {/* here ratings and picture with host name and picture */}
        <div></div>
      </div>
      {/* .cover .description .equipments .host.name .host.picture (of the host ) .location .ratin .tags */}
    </div>
  );
}

export default Fiche_logement;
