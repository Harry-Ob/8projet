import { Link } from "react-router-dom"; // Import React Router components
import "./assets/styles/error.scss";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-[120px] md:text-[288px] font-bold text-[#FF6060]">
        404
      </h1>
      <h3 className="text-lg font-medium md:text-2xl text-[#FF6060] leading-[1.43] mt-28">
        Oups! La page que vous demandez n&apos;existe pas.
      </h3>
      <Link
        to="/"
        className="mt-28 text-sm md:text-base text-black hover:text-black underline"
      >
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default Error;
