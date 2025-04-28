import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

  // To manage slider index
  // const [currentImage, setCurrentImage] = useState(0);
  // const len_pic = logement.pictures.length ;
  // const nextImage = () => {
  //   setCurrentImage((next) => (next + 1) %len_pic );
  // };

  // const prevImage = () => {
  //   setCurrentImage((prev) => (prev - 1 + logement.pictures.length) % len_pic);
  // };

  // if (!logement) return <p>Logement non trouvé.</p>;
  function show_all() {}

  function show_one() {}
  return (
      <div className="p-4">
        {/* {logement.pictures > 0 ? show_all() : show_one() } */}
        {/* on my end i need every data  */}
        {/* .cover .description .equipements .host.name .host.picture (of the host ) .location .ratin .tags */}

        {/* Slider */}
        <div className="relative w-full h-64 overflow-hidden rounded-xl mb-6">
          <img
            src={logement.cover}
            alt={logement.title}
            className="w-full h-full object-cover"
          />
          </div>
          <div>
            {/* Title and Location */}
            <p> dsds le nombre dimage est {logement.pictures.length}</p>
            <h1 className="text-2xl font-bold">{logement.title}</h1>
            <p className="text-gray-500">{logement.location}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-4">
              {logement.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm"
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
        <div className="flex gap-1">
          {/* my stars goes there */}
        </div>

        
      {/* Collapsible Components */}
      {/* <div className="flex flex-col gap-4">
        <Collapsible title="Description">
          <p>{logement.description}</p>
        </Collapsible>
        <Collapsible title="Équipements">
          <ul className="list-disc list-inside">
            {logement.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Collapsible>
      </div> */}


            

            {/* <p>{logement.title}</p>
            <p>{logement.location}</p> */}
            {/* <p></p> */}
            <div>
              {/* {logement.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
    <hr />
              {logement.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))} */}
              {/* here u will add the tags  */}
            </div>
          </div>
          <div>{/* here ratings and picture with host name and picture */}</div>
          {/* <Collapsible /> */}
        </div>
        {/* .cover .description .equipments .host.name .host.picture (of the host ) .location .ratin .tags */}

        {/* <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <p>{logement.rating}</p>
        <p>
          {logement.tags}
          {logement.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          {for (let i=0 ; i<logement.tags ; i++){
            <span> </span>

            {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
            }}
        </p> */}
        
        {/* <p>{logement.host.name}</p> */}
        {/* <p>{logement.equipments}</p> */}

        {/* what is under is what goes inside the collapsible */}

        {/* <p>{logement.description}</p> */}
        {/* <p>{logement.equipments.map(x => ( <li key={x}> {x} </li>))}</p> */}

        {/* go back to take a lil class with REACT for loops and how to show variable and others stuff needed to be faster  */}

        {/* Make a button or something to come back if needs be  */}
        <button onClick={() => navigate("/")}>⬅️ sheesh Retour</button>
        {/*  Collapsibale item that can be open and use here, pay attention to use it also in about page => component to be created */}
        {/*  */}
      </div>
    
  );
}

export default Fiche_logement;
