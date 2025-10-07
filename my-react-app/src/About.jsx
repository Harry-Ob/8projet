import bg_img from "./assets/img/image2.jpeg";
import Collapsible from "./component/Collapsible";

function About() {
  const aproposData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/*  le border doit etre transparent ici  */}
      <div className="rounded-xl border-2 border-transparent overflow-hidden  mb-7 ">
        {/* tricks with absolute and relative to make sure ur text stays in the middle no matter what  */}
        <div
          className="relative 
                sm:h-48 sm:w-full
                md:h-56   md:mx-auto md:w-full
                lg:h-56 
                flex items-center justify-center
                bg-cover bg-center 
                before:absolute before:inset-0 before:mix-blend-darken 
                h-[111px]"
          style={{
            backgroundImage: `url(${bg_img})`, // Change this!
          }}
        >
          {/* // the first argument is an array 
// the 2nd is an array : with a string and an array 
// list_titles, list_content */}
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-4">
        {aproposData.map((item, index) => (
          <Collapsible key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
