import ParticlesContainer from "./containers/ParticlesContainer";
import Movies from "./containers/Movies";

const App = () => {
  return (
    <>
    <ParticlesContainer />
    <div className="App bg-gradient-to-bl from-gray-600 via-gray-900 to-black min-h-screen">
      <Movies />
    </div>
    </>
  );
};

export default App;
