import { FaFingerprint } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import HeroImg from "../assets/hero-img.png";

export const Hero = () => {
  return (
    <section className="container-fluid  d-flex mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 mb-4">
          <p className="text-primary fw-bold mb-3">Core features</p>
          <h1 className="display-4 fw-semibold mb-4 custom-primary-text">
            Develop systematically with Comet.
          </h1>
          <h2 className="mt-5 mb-5 fw-semibold custom-primary-text">
            Adaptable sections are ideal{" "}
            <span className="custom-text-color">
              for crafting versatile layouts.
            </span>
          </h2>

          <div className="row mb-5">
            <article className="col-md-6">
              <div className="d-flex flex-column align-items-start">
                <div className="bg-light rounded-circle p-3 mb-4">
                  <FaFingerprint color="#92da2cff" size={40} />
                </div>
                <h2 className="h4 fw-bold mb-3 custom-primary-text">
                  System analyze your <br /> data
                </h2>
              </div>
              <p className="custom-text-color">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </p>
              <div className="d-flex flex-column align-items-start">
                <a
                  href="#"
                  className="text-decoration-none custom-primary-text fw-semibold"
                >
                  Learn more
                  <span>
                    <MdArrowOutward
                      size={20}
                      className="ms-2"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>

              <IoRemoveOutline size={25} aria-label="Remove Icon" />
            </article>

            <div className="col-md-6">
              <article className="d-flex flex-column align-items-start">
                <div className="bg-light rounded-circle p-3 mb-4">
                  <BsTelephoneOutbound
                    color="#c36bddff"
                    size={40}
                    aria-label="Telephone Icon"
                  />
                </div>

                <h2 className="h4 fw-bold mb-3 custom-primary-text">
                  Direct system <br /> management
                </h2>

                <p className="custom-text-color">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </p>
                <div className="d-flex flex-column align-items-start">
                  <a
                    href="#"
                    className="text-decoration-none custom-primary-text fw-semibold"
                  >
                    Learn more
                    <span>
                      <MdArrowOutward
                        size={20}
                        className="ms-2"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>

                <IoRemoveOutline size={25} aria-label="Remove Icon" />
              </article>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ms-lg-5 d-none d-lg-block">
          <img
            src={HeroImg}
            alt="Person using laptop"
            className="img-fluid rounded-5"
            style={{ height: "600px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
