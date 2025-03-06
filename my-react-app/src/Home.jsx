import { useState, useEffect } from "react"; // ✅ Correct Import

function Home() {
  // const [count, set_count] = useState(0);

  //  question sur les useState and more
  const [logements, setLogements] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("../public/logements.json"); // Fetch from public folder
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

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Liste des Logements</h2>
      {logements.map((lg) => (
        // lg.title
        <article key={lg.id} >
         
          <div>
            <h3>{lg.title}</h3>
            <img src={lg.cover} alt={lg.title} />
            </div>
        </article>
        ))}

    </div>
  );
}

export default Home;
