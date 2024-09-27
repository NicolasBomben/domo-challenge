import { useEffect, useState } from "react";
import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import DomoLogo from "./assets/domo-logo.png";
import { Footer } from "./components/Footer";

export const App = () => {
  //estado para controlar el funcionamiento del menu de navegacion.
  const [isNavOpen, setIsNavOpen] = useState(false);

  //estado para simular un estado de carga inicial.
  const [isLoading, setIsLoading] = useState(true);

  //funcion para alternar el estado. Si isNavOpen es true, el menu se cierra. Si es false, se abre.
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //uso del hook useEffect para simular el tiempo de carga
  useEffect(() => {
    const loaderTime = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(loaderTime);
  }, []);

  const loader = (
    <div className="loader-container d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-center mt-3">
          <img src={DomoLogo} alt="domo logo cargando" className="mb-2" />
          <span>Cargando challenge...</span>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="container-fluid p-0">
      {/* Con operador el operador ternario decido si se muetra el loader o el contenido */}
      {isLoading ? (
        loader
      ) : (
        <>
          <Navbar toggleNav={toggleNav} isNavOpen={isNavOpen} />
          <Hero />
          <Footer/>
        </>
      )}
    </main>
  );
};
