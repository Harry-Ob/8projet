import { useState, useEffect } from "react"; // ✅ Correct Import
import { Link } from "react-router-dom";
import bg_img from "./assets/img/image1.jpeg" ;
// import {useHousing} from "./ContexteHome.jsx"

function Home() {
  // const [count, set_count] = useState(0);

  //  question sur les useState and more
  const [logements, setLogements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        // the root is where the file start so no need to add public/ before it
        const response = await fetch("/logements.json"); // Fetch from public folder
        if (!response.ok) throw new Error("Failed to load data");

        const data = await response.json();
        console.log(data);
        setLogements(data);
      } catch (error) {
        console.error("Error fetching logements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogements();
  }, []);

  // const { logements, loading} = context_home() ; 
  if (loading) return <p>Loading...</p>;
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">

      
        <div className="rounded-xl border-2 border-blue-500 overflow-hidden ">
          {/* w-[335px] h-[111px] */}
          {/* tricks with absolute and relative to make sure ur text stays in the middle no matter what  */}
          <div  className="relative 
          sm:h-48 sm:w-full
          md:h-56 md:container md:mx-auto md:w-full
          lg:h-56 lg:max-w-7xl 
          flex items-center justify-center
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-black/60 before:mix-blend-darken "
          style={{
            backgroundImage: `url(${bg_img})`, // Change this!
          }}>
          <h2 className="relative z-10 w-full 
          pb-[50px] pt-[50px]
          text-2xl font-bold 
          mb-6 mt-6 
          text-white text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center px-4">
        Chez vous, partout et ailleurs
      </h2>

          </div>
        </div>
      
      {/* h2 title */}
      


      {/* Grid container */}
      <div className=" bg-gray-100 p-6 rounded-2xl mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {logements.map((lg) => (
            <article key={lg.id}>
              <Link to={`/logement/${lg.id}`} className="block h-full">
                <div
                  className="relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  style={{
                    backgroundImage: `url(${lg.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-lg">
                    {lg.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Home;
