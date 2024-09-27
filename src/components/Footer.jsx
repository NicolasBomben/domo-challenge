import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
       
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h5 className="fw-bold">Contacto</h5>
            <a href="mailto:nicolasbomben@gmail.com" className="text-decoration-none d-block mb-2">
              nicolasbomben@gmail.com
            </a>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/nicolas-bomben-a74992209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30}  />
              </a>
              <a
                href="https://github.com/nicolasbomben"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30}  />
              </a>
            </div>
          </div>
          
          
          <div className="col-lg-6">
            <p className="fw-semibold">
              En esta entrega, seleccioné una de las cinco imágenes disponibles
              porque me parecía la más atractiva visualmente. Implementé un menú
              desplegable adaptable tanto para escritorio como para dispositivos móviles, con 
              un posicionamiento ajustado a cada entorno. Además, añadí una simulación de carga 
              antes de mostrar el contenido de la aplicación utilizando los hooks de React: 
              <code> useState</code> y <code>useEffect</code>. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
