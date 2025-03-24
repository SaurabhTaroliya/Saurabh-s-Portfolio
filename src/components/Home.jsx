import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume V1.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import styled from "styled-components";

export const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Saurabh Taroliya",
        "I am a fullStack developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <StyledHomeContainer>
            <h1 ref={typedRef}></h1>
            <a
              href={pdf}
              download="saurabhTaroliya_Resume.pdf"
              className="btn btn-outline-warning my-3"
            >
              Download Resume
            </a>
          </StyledHomeContainer>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            {/* <img src={hero_img} alt="hero image" /> */}
            <img src={`/assets/${hero.imgSrc}`} alt="hero image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const StyledHomeContainer = styled.section`
  .typed-cursor {
    display:none;
  }
`;
