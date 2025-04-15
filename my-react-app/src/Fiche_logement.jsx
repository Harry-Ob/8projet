import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    
            if (!foundLogement){
              navigate("/404")
            } 

    
            setLogement(foundLogement);
            setLoading(false);

        };
    
        fetchLogement();
      }, [id,navigate]);


      if (loading) return <p>Chargement...</p>;
      // if (!logement) return <p>Logement non trouvé.</p>;
function show_all() {

}

function show_one(){

}
      return (
        console.debug(),
        <div>
          {/* {logement.pictures > 0 ? show_all() : show_one() } */}
          {/* on my end i need every data  */}
          {/* .cover .description .equipements .host.name .host.picture (of the host ) .location .ratin .tags */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <p>{logement.rating}</p>
          <p>{logement.tags}</p>
          <p>{logement.host.name}</p>
          <img src={logement.cover} alt={logement.title} style={{ width: "300px", height: "auto" }} />
          <p>{logement.description}</p>
          <button onClick={() => navigate("/")}>⬅️ Retour</button>
        </div>
      );
    };


export default Fiche_logement ; 


