import Particles from "react-tsparticles";
import "./ParticlesContainer.css";

const ParticlesContainer = () => {
  return (
    <Particles
      params={{
        particles: {
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          color: {
            value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
