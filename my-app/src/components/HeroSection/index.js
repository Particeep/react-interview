import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { useNavigate } from "react-router-dom";
import Video from "../../video/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          My App est la source de films la plus populaire et la plus fiable au
          monde
        </HeroH1>
        <HeroP>
          Trouvez des notes et des critiques pour les derniers films et émissions de télévision.
        </HeroP>
        <HeroBtnWrapper>
          
            <Button
              onClick={routeChange}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary="true"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Accéder à notre Site{" "}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
